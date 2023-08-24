const http = require('http');
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
    return [fields, NoOfStudents];
  } catch (err) {
    console.log(err);
    throw new Error('Cannot load the database');
  }
}

const path = process.argv[2];
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url == '/students') {
    countStudents(path).then(response => {
      const NoOfStudents = response[1];
      let count = 0;
      const fields = response[0];
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${NoOfStudents}\n`);
      for (const field in fields) {
	let length = fields[field].length;
	const names = fields[field].toString().split(',').join(', ');
	if (field) {
	  if (count == 0) {
		count = count + 1;
		res.write(`Number of students in ${field}: ${length}. List: ${names}\n`);
	  } else {
		res.write(`Number of students in ${field}: ${length}. List: ${names}`);
	  }
	}
      }
      res.end();
    }).catch(() => {
      res.end('Cannot load the database\n');
      throw new Error('Cannot load the database');
    })
  }
})
app.listen(port, hostname);
module.exports = app;
