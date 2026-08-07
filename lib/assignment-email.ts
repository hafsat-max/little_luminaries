import { Resend } from "resend";
import type { StoredAttachment } from "./assignment-storage";
import type { StudentRecord } from "./students";

export async function deliverAssignment(students: StudentRecord[], attachments: StoredAttachment[]) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) return { mode: "development" as const, delivered: students.length, failed: [] };

  const resend = new Resend(apiKey);
  const failed: Array<{ studentId: number; studentName: string; message: string }> = [];
  let delivered = 0;

  for (const student of students) {
    try {
      const { error } = await resend.emails.send({
        from,
        to: [student.parentEmail],
        subject: `New homework for ${student.name}`,
        html: `<p>Hello,</p><p>${student.name} has received a new homework assignment from Little Luminaries.</p><p>The assignment files are attached.</p>`,
        attachments: attachments.map((file) => ({
          filename: file.name,
          content: file.content,
        })),
      });
      if (error) throw new Error(error.message);
      delivered += 1;
    } catch (error) {
      failed.push({
        studentId: student.id,
        studentName: student.name,
        message: error instanceof Error ? error.message : "Email delivery failed",
      });
    }
  }

  if (!delivered) throw new Error(`Email delivery failed: ${failed[0]?.message || "No messages were accepted"}`);
  return { mode: "email" as const, delivered, failed };
}
