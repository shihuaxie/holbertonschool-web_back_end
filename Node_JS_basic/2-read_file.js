const fs = require('fs');

function countStudents(path) {
  let data;

  // 1) Read file synchronously
  // If reading fails (file not found, etc.), throw required err msg
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // 2) Split file into lines
  // Remove empty lines (CSV can have empty lines at the end)
  const lines = data.split('\n').filter(line => line.trim() !== '');

  // If there is only the header (or empty file), there are no students
  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  // 3) First line is the header, the rest are student data lines
  const students = lines.slice(1);

  // 4) Log total number of students
  console.log(`Number of students: ${students.length}`);

  // 5) Group students by field (e.g., CS, SWE)
  // Example structure:
  // {
  //   CS: ["Johann", "Arielle", ...],
  //   SWE: ["Guillaume", "Joseph", ...]
  // }
  const groups = {};

  students.forEach(line => {
    const cols = line.split(',');

    // According to project CSV format:
    // firstname is the first column
    const firstname = cols[0];

    // field is the last column
    const field = cols[cols.length - 1];

    // Initialize group array if not existing
    if (!groups[field]) {
      groups[field] = [];
    }

    // Add student firstname to the corresponding field group
    groups[field].push(firstname);
  });

  // 6) Log results for each field
  // Output format must match the checker requirement exactly
  Object.keys(groups).forEach(field => {
    const list = groups[field].join(', ');
    console.log(`Number of students in ${field}: ${groups[field].length}. List: ${list}`);
  });
}

module.exports = countStudents;
