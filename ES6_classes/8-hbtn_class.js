export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return parseInt(this._size, 10);
  }

  toString() {
    return this._location;
  }
}
