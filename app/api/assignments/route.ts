import { NextResponse } from "next/server";
import { deliverAssignment } from "@/lib/assignment-email";
import { persistAssignment, saveAssignment } from "@/lib/assignment-storage";
import { getStudents } from "@/lib/students";
import { isTeacherAuthenticated } from "@/lib/teacher-auth";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_TYPES = new Set(["application/pdf", "image/png", "image/jpeg"]);

export async function POST(request: Request) {
  if (!isTeacherAuthenticated()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const form = await request.formData();
  const files = form.getAll("files").filter((value): value is File => value instanceof File);
  let studentIds: number[] = [];
  try {
    studentIds = JSON.parse(String(form.get("studentIds"))) as number[];
  } catch {
    return NextResponse.json({ error: "Invalid student selection." }, { status: 400 });
  }

  const selectedStudents = getStudents().filter((student) => studentIds.includes(student.id));
  if (!selectedStudents.length) return NextResponse.json({ error: "Select at least one student." }, { status: 400 });
  if (!files.length) return NextResponse.json({ error: "Attach at least one homework file." }, { status: 400 });
  if (files.length > 10) return NextResponse.json({ error: "A maximum of 10 files can be sent at once." }, { status: 400 });
  const invalid = files.find((file) => !ACCEPTED_TYPES.has(file.type) || file.size > MAX_FILE_SIZE);
  if (invalid) return NextResponse.json({ error: `${invalid.name} is invalid or larger than 10 MB.` }, { status: 400 });

  try {
    const { id, attachments } = await saveAssignment(selectedStudents, files);
    const delivery = await deliverAssignment(selectedStudents, attachments);
    await persistAssignment({
      id,
      createdAt: new Date().toISOString(),
      students: selectedStudents.map(({ id: studentId, name, parentEmail }) => ({ id: studentId, name, parentEmail })),
      files: attachments.map(({ content: _content, ...file }) => file),
      deliveryMode: delivery.mode,
    });
    return NextResponse.json({
      id,
      deliveryMode: delivery.mode,
      delivered: delivery.delivered,
      failed: delivery.failed.map(({ studentId, studentName }) => ({ studentId, studentName })),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "The assignment could not be sent. Please try again." }, { status: 500 });
  }
}
