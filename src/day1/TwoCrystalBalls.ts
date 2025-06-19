export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jmpAmount;

  while (breaks[i] === false) {
    i += jmpAmount;
  }
  i -= jmpAmount;

  while (breaks[i] == false) {
    i++;
  }

  if (i == breaks.length) {
    return -1;
  }

  return i;
}