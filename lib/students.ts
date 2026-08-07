import students from "@/data/students.json";

export type StudentRecord = (typeof students)[number];

export function getStudents() {
  return students as StudentRecord[];
}

export function getPublicStudents() {
  return getStudents().map(({ parentEmail: _parentEmail, ...student }) => student);
}
