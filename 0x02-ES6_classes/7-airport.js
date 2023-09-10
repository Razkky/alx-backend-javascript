export default class Airpot {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // OVeride default toString method
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
