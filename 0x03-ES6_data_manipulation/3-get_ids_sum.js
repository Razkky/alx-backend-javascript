export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    const ids = students.map((student) => student.id);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return ids.reduce(reducer);
  }
}
