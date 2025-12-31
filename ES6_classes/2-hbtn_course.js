export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Not an array');
    }

    this.name = name;
    this.length = length;
    this.students = students;
  }

  // name verify
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // length verify
  get length() {
    return this._length;
  }

  set length(newLen) {
    if (typeof newLen !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = Number(newLen);
  }

  // students verify
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Not an array');
    }
    this._students = newStudents;
  }
}
