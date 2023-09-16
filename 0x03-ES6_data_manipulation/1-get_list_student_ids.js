export default function getListStudentIds(students) {
  // check if students is an array
  if (Array.isArray(students)) {
    return students.map((student) => student.id);
  }
  return [];
}
