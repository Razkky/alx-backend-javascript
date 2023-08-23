const fs = require('fs');

async function countStudents(path) {
  try {
    const file = await fs.promises.readFile(path, 'utf-8');
    const data = file.split('\n');
    const body = data.slice(1);
    const NoOfStudents = body.length;
    const fields = {};
    for (let line of body) {
      line = line.split(',');
      const course = line[3];
      const student = line[0];
      if (fields.hasOwnProperty(course)) {
	fields[course].push(student);
      } else {
	fields[course] = [];
	fields[course].push(student);
      }
    }
    console.log(`Number of students: ${NoOfStudents}`);
    for (const field in fields) {
      if (field) {
	console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].toString().split(',').join(', ')}`);
      }
    }
  } catch (err) {
    console.log(err);
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
