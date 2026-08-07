import { randomUUID } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { StudentRecord } from "./students";

export type StoredAttachment = { name: string; size: number; type: string; path: string; content: Buffer };

export type AssignmentRecord = {
  id: string;
  createdAt: string;
  students: Array<{ id: number; name: string; parentEmail: string }>;
  files: Array<Omit<StoredAttachment, "content">>;
  deliveryMode: "email" | "development";
};

const storageRoot = path.join(process.cwd(), "storage");

function safeName(name: string) {
  return path.basename(name).replace(/[^a-zA-Z0-9._-]/g, "-");
}

export async function saveAssignment(selectedStudents: StudentRecord[], files: File[]) {
  const id = randomUUID();
  const assignmentDirectory = path.join(storageRoot, "assignments", id);
  await mkdir(assignmentDirectory, { recursive: true });

  const attachments: StoredAttachment[] = [];
  for (const file of files) {
    const content = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(assignmentDirectory, safeName(file.name));
    await writeFile(filePath, content);
    attachments.push({ name: file.name, size: file.size, type: file.type, path: filePath, content });
  }

  return { id, attachments };
}

export async function persistAssignment(record: AssignmentRecord) {
  await mkdir(storageRoot, { recursive: true });
  const recordsPath = path.join(storageRoot, "assignments.json");
  let records: AssignmentRecord[] = [];
  try {
    records = JSON.parse(await readFile(recordsPath, "utf8")) as AssignmentRecord[];
  } catch {
    records = [];
  }
  records.unshift(record);
  await writeFile(recordsPath, JSON.stringify(records, null, 2));
}
