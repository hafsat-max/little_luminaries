"use client";

import { ChangeEvent, DragEvent, FormEvent, useEffect, useRef, useState } from "react";

type PortalView = "loading" | "login" | "compose" | "sent";

type Student = {
  id: number;
  name: string;
  initials: string;
  color: string;
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_TYPES = ["application/pdf", "image/png", "image/jpeg"];

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function TeacherPortal() {
  const [view, setView] = useState<PortalView>("loading");
  const [students, setStudents] = useState<Student[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<"email" | "development">("development");
  const [deliveredCount, setDeliveredCount] = useState(0);
  const [failedRecipients, setFailedRecipients] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  const selectedStudents = students.filter((student) => selected.includes(student.id));

  async function loadStudents() {
    const response = await fetch("/api/students", { cache: "no-store" });
    if (!response.ok) return false;
    const data = (await response.json()) as { students: Student[] };
    setStudents(data.students);
    setSelected((current) => current.length ? current : data.students.slice(0, 2).map((student) => student.id));
    return true;
  }

  useEffect(() => {
    loadStudents().then((authenticated) => setView(authenticated ? "compose" : "login"));
  }, []);

  async function logIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
    });
    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error || "Unable to log in. Please try again.");
      setIsSubmitting(false);
      return;
    }
    const loaded = await loadStudents();
    setView(loaded ? "compose" : "login");
    setIsSubmitting(false);
  }

  async function logOut() {
    await fetch("/api/auth/logout", { method: "POST" });
    setView("login");
    setFiles([]);
    setSelected([]);
    setStudents([]);
    setError("");
  }

  function addFiles(incoming: FileList | File[]) {
    const next = Array.from(incoming);
    const invalidType = next.find((file) => !ACCEPTED_TYPES.includes(file.type));
    const tooLarge = next.find((file) => file.size > MAX_FILE_SIZE);

    if (invalidType) {
      setError(`${invalidType.name} is not a PDF, PNG, or JPG file.`);
      return;
    }
    if (tooLarge) {
      setError(`${tooLarge.name} is larger than 10 MB.`);
      return;
    }

    setError("");
    setFiles((current) => {
      const known = new Set(current.map((file) => `${file.name}-${file.size}`));
      return [...current, ...next.filter((file) => !known.has(`${file.name}-${file.size}`))];
    });
  }

  function chooseFiles(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) addFiles(event.target.files);
    event.target.value = "";
  }

  function dropFiles(event: DragEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsDragging(false);
    addFiles(event.dataTransfer.files);
  }

  async function sendAssignment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected.length || !files.length) return;
    setIsSubmitting(true);
    setError("");
    const form = new FormData();
    form.set("studentIds", JSON.stringify(selected));
    files.forEach((file) => form.append("files", file));
    const response = await fetch("/api/assignments", { method: "POST", body: form });
    const data = (await response.json().catch(() => null)) as {
      error?: string;
      deliveryMode?: "email" | "development";
      delivered?: number;
      failed?: Array<{ studentName: string }>;
    } | null;
    if (!response.ok) {
      if (response.status === 401) setView("login");
      setError(data?.error || "The assignment could not be sent. Please try again.");
      setIsSubmitting(false);
      return;
    }
    setDeliveryMode(data?.deliveryMode || "development");
    setDeliveredCount(data?.delivered || 0);
    setFailedRecipients(data?.failed?.map((recipient) => recipient.studentName) || []);
    setView("sent");
    setIsSubmitting(false);
  }

  if (view === "loading") {
    return <main className="portal-canvas portal-loading"><div className="portal-spinner" /><p>Loading teacher portal…</p></main>;
  }

  if (view === "login") {
    return (
      <main className="portal-canvas portal-login">
        <span className="orb orb-yellow" />
        <span className="orb orb-green" />
        <span className="orb orb-red" />
        <span className="orb orb-blue" />
        <img className="login-logo" src="/luminaries-logo.svg" alt="Little Luminaries" />

        <form className="login-card" onSubmit={logIn}>
          <p className="eyebrow">Teacher portal</p>
          <h1>Welcome back</h1>
          <p className="supporting-copy">Sign in with the details provided by Little Luminaries.</p>

          <label>
            <span>Email address</span>
            <input name="email" type="email" autoComplete="username" placeholder="teacher@littleluminaries.com" required />
          </label>
          <label>
            <span>Password</span>
            <input name="password" type="password" autoComplete="current-password" placeholder="Enter your password" required />
          </label>

          {error ? <p className="file-error" role="alert">{error}</p> : <p className="managed-note">Your account is managed by Little Luminaries.</p>}
          <button className="primary-button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Logging in…" : "Log in"}</button>
        </form>
      </main>
    );
  }

  if (view === "sent") {
    return (
      <main className="portal-canvas success-page">
        <header className="portal-header">
          <img src="/luminaries-white-logo.svg" alt="Little Luminaries" />
          <nav aria-label="Teacher portal">
            <button onClick={() => setView("compose")}>New assignment</button>
            <button className="logout-button" onClick={logOut}>Log out</button>
          </nav>
        </header>
        <span className="orb orb-success-yellow" />
        <span className="orb orb-success-blue" />

        <section className="success-card" aria-live="polite">
          <span className="success-check" aria-hidden="true">✓</span>
          <h1>Assignment sent!</h1>
          <p>{deliveryMode === "email" ? `The homework was emailed successfully to ${deliveredCount} ${deliveredCount === 1 ? "parent" : "parents"}.` : "The assignment has been saved successfully in development delivery mode."}</p>
          {failedRecipients.length > 0 && <p className="delivery-warning" role="status">Could not deliver to: {failedRecipients.join(", ")}. Their parent email addresses need attention.</p>}
          <div className="delivery-summary">
            <h2>Delivery summary</h2>
            <dl>
              <div><dt>Students</dt><dd>{selectedStudents.map((student) => student.name).join(", ")}</dd></div>
              <div><dt>Files</dt><dd>{files.length} {files.length === 1 ? "attachment" : "attachments"}</dd></div>
              <div><dt>Status</dt><dd>{deliveryMode === "email" ? `${deliveredCount} delivered${failedRecipients.length ? ` · ${failedRecipients.length} failed` : ""}` : "Saved locally · Email provider not configured"}</dd></div>
            </dl>
          </div>
          <div className="success-actions">
            <button className="primary-button" onClick={() => { setFiles([]); setView("compose"); }}>Send another</button>
            <button className="secondary-button" onClick={() => setView("compose")}>View sent items</button>
          </div>
        </section>
      </main>
    );
  }

  const canSend = selected.length > 0 && files.length > 0;

  return (
    <main className="portal-canvas compose-page">
      <aside className="portal-sidebar">
        <img src="/luminaries-white-logo.svg" alt="Little Luminaries" />
        <p>Teacher portal</p>
        <nav aria-label="Assignment navigation">
          <button className="active">New assignment</button>
          <button>Sent assignments</button>
        </nav>
        <button className="sidebar-logout" onClick={logOut}>Log out</button>
      </aside>

      <section className="compose-content">
        <header>
          <h1>Create an assignment</h1>
          <p>Select students, add the homework files, and send them to their parents.</p>
        </header>

        <form className="assignment-card" onSubmit={sendAssignment}>
          <div className="step-heading">
            <span className="step-number red">1</span>
            <div><h2>Choose students</h2><p>Parents of selected students will receive the assignment by email.</p></div>
          </div>

          <div className="student-grid">
            {students.map((student) => {
              const isSelected = selected.includes(student.id);
              return (
                <button
                  type="button"
                  aria-pressed={isSelected}
                  className={`student-card ${isSelected ? "selected" : ""}`}
                  key={student.id}
                  onClick={() => setSelected((current) => isSelected ? current.filter((id) => id !== student.id) : [...current, student.id])}
                >
                  <span className="student-avatar" style={{ backgroundColor: student.color }}>{student.initials}</span>
                  <span>{student.name}</span>
                </button>
              );
            })}
          </div>

          <div className="step-heading">
            <span className="step-number blue">2</span>
            <div><h2>Add homework files</h2><p>Upload PDF, PNG, or JPG files. Maximum 10 MB per file.</p></div>
          </div>

          <input ref={fileInput} className="sr-only" type="file" accept=".pdf,.png,.jpg,.jpeg" multiple onChange={chooseFiles} />
          <button
            className={`upload-area ${isDragging ? "dragging" : ""}`}
            type="button"
            onClick={() => fileInput.current?.click()}
            onDragEnter={(event) => { event.preventDefault(); setIsDragging(true); }}
            onDragOver={(event) => event.preventDefault()}
            onDragLeave={() => setIsDragging(false)}
            onDrop={dropFiles}
          >
            <span className="upload-arrow" aria-hidden="true">↑</span>
            <strong>Drop files here or choose files</strong>
            <small>PDF, PNG or JPG</small>
          </button>
          {error && <p className="file-error" role="alert">{error}</p>}

          {files.length > 0 && (
            <div className="file-list" aria-label="Attached files">
              {files.map((file, index) => (
                <article className="file-card" key={`${file.name}-${file.size}`}>
                  <div><strong>{file.name}</strong><small>{formatBytes(file.size)} · Ready</small></div>
                  <button type="button" aria-label={`Remove ${file.name}`} onClick={() => setFiles((current) => current.filter((_, fileIndex) => fileIndex !== index))}>×</button>
                </article>
              ))}
            </div>
          )}

          <div className="assignment-actions">
            <p>{selected.length} {selected.length === 1 ? "student" : "students"} selected · {selected.length} parent {selected.length === 1 ? "email" : "emails"}</p>
            <button className="primary-button" type="submit" disabled={!canSend || isSubmitting}>{isSubmitting ? "Sending…" : "Send assignment"}</button>
          </div>
        </form>
      </section>
    </main>
  );
}
