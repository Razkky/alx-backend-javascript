export default class HolbertonCourse {
  constructor(name, length, students) {
    if (Object.getPrototypeOf(name) !== String.prototype) throw new Error('name must be a string');
    if (Object.getPrototypeOf(length) !== Number.prototype) throw new Error('length must be a Number');
    if (Object.getPrototypeOf(students) !== Array.prototype) throw new Error('students must be a Array');
    students.forEach((student) => {
      if (Object.getPrototypeOf(student) !== String.prototype) throw new Error('students must be a string');
    });

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // setters
  set name(newName) {
    if (Object.getPrototypeOf(newName) !== String.prototype) throw new Error('name must be a string');
    this._name = newName;
  }

  set length(newLength) {
    if (Object.getPrototypeOf(newLength) !== String.prototype) throw new Error('name must be a Number');
    this._name = newLength;
  }

  set students(newStudents) {
    if (Object.getPrototypeOf(newStudents) !== String.prototype) throw new Error('studnet must be a String');
    this._name = newStudents;
  }

  // getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
