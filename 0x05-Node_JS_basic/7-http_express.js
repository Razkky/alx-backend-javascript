const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

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
    return [fields, NoOfStudents];
  } catch (err) {
    console.log(err);
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  const path = process.argv[2];
  countStudents(path).then(response => {
    const fields = response[0];
    const NoOfStudent = response[1];
    const text = 'This is the list of our students\n';
    const totalStudent = `Number of students: ${NoOfStudent}\n`;
    let statment = '';
    const count = 0;
    for (const field in fields) {
      if (field) {
	const length = fields[field].length;
	const names = fields[field].toString().split(',').join(', ')
	if (count == 0) {
	  statment += `Number of students in ${field}: ${length}. List: ${names}\n`
	} else {
	  statment += `Number of students in ${field}: ${length}. List: ${names}`
	}
      }
    }
    res.status(200).send(text + totalStudent + statment);
  }).catch((error) => {
    res.status(404).send('Cannot load the database');
  });
});

app.listen(port);
 
