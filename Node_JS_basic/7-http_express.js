const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

/**
 * Read the CSV database asynchronously and return the report string
 * in the exact format required by the project.
 *
 * @param {string} path
 * @returns {Promise<string>}
 */
function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // skip header

      const output = [];
      output.push(`Number of students: ${students.length}`);

      const groups = {};

      students.forEach((line) => {
        const cols = line.split(',');
        const firstname = cols[0];
        const field = cols[cols.length - 1];

        if (!groups[field]) {
          groups[field] = [];
        }
        groups[field].push(firstname);
      });

      Object.keys(groups).forEach((field) => {
        output.push(
          `Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(
            ', '
          )}`
        );
      });

      resolve(output.join('\n'));
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');
  res.write('This is the list of our students\n');

  readDatabase(database)
    .then((report) => {
      res.end(report);
    })
    .catch(() => {
      res.end('Cannot load the database');
    });
});

app.listen(1245);

module.exports = app;
