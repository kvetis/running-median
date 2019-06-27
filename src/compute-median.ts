/**
 * Finds median value in sorted array
 * @param sortedArray Input array that has been sorted
 */
export function computeMedian(sortedArray: number[]) {
  if (!sortedArray) {
    throw new Error('Argument sortedArray must be specified');
  }
  const { length } = sortedArray;
  if (!length) {
    return;
  }
  if (length % 2) {
    // array length is odd
    return sortedArray[(length - 1) / 2];
  }
  return (sortedArray[(length / 2) - 1] + sortedArray[length / 2]) / 2;
}