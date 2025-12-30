export default function returnHowManyArguments(...args) {
  let i = 0;
  for (const arg of args) {
    if (arg) {
      i += 1;
    }
  }
  return i;
}
