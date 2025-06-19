export default function bs_list(haystack: number[], needle: number): boolean {
  let high = haystack.length;
  let low = 0;

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    let midNum = haystack[mid];

    if (midNum == needle) {
      return true;
    } else if (midNum < needle) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return false;
}