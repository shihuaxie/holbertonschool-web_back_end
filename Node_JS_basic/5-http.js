const http = require('http');
const fs = require('fs');

/**
 * Read the database asynchronously and return the output string
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
      const students = lines.slice(1); // remove header

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

const database = process.argv[2];

const app = http.createServer((req, res) => {
  const { url } = req;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (url === '/students') {
    res.write('This is the list of our students\n');

    readDatabase(database)
      .then((report) => {
        res.end(report);
      })
      .catch(() => {
        // The project expects exactly this text on error for /students
        res.end('Cannot load the database');
      });

    return;
  }

  // For any other endpoint, keep it simple (not specified, but safe)
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
