export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      const newStudent = student;
      if (grade[0]) newStudent.grade = grade[0].grade;
      else newStudent.grade = 'N/A';
      return newStudent;
    });
}
