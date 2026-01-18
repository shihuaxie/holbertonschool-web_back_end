const fs = require('fs');

/**
 * countStudents
 * Reads a CSV database file asynchronously and logs:
 * - total number of students
 * - number of students per field (CS, SWE, etc.) + list of first names
 *
 * The function returns a Promise:
 * - resolves when processing is done
 * - rejects with Error('Cannot load the database') if file cannot be read
 *
 * @param {string} path - path to the CSV database file
 * @returns {Promise<void>}
 */

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read file asynchronously (non-blocking)
    fs.readFile(path, 'utf-8', (err, data) => {
      // If reading fails, reject with the required error
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split into lines and remove empty lines (e.g., trailing newline)
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // If only header (or empty content), there are no students
      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      // Remove header line
      const students = lines.slice(1);

      // Log total number of students
      console.log(`Number of students: ${students.length}`);

      // Group by field
      const groups = {};

      students.forEach(line => {
        const cols = line.split(',');
        const firstname = cols[0];
        const field = cols[cols.length - 1];

        if (!groups[field]) groups[field] = [];
        groups[field].push(firstname);
      });

      // Log per-field stats
      Object.keys(groups).forEach((field) => {
        const list = groups[field].join(', ');
        console.log(`Number of students in ${field}: ${groups[field].length}. List: ${list}`);
      });

      // Resolve when all logs are done
      resolve();
    });
  });
}

module.exports = countStudents;
