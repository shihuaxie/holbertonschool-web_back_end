export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const arr = [];

  for (const value of array) {
    arr[idx] = appendString + value;
    idx += 1;
  }

  return arr;
}
