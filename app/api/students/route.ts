import { NextResponse } from "next/server";
import { isTeacherAuthenticated } from "@/lib/teacher-auth";
import { getPublicStudents } from "@/lib/students";

export async function GET() {
  if (!isTeacherAuthenticated()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ students: getPublicStudents() });
}
