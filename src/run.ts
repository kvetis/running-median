import { loadArray } from './load-array';
import { computeMedian } from './compute-median';

// finding median in sorted array is quick
// using an external implementation for faster insertion with binary search
const SortedArray = require('sorted-array');

export async function run() {
  // read input
  const filePath = process.argv[2];
  if (!filePath) {
    throw new Error('No input file specified. Run ts-node index.ts path/to/input');
  }

  const input = await loadArray(filePath);
  // strip the first line
  input.splice(0, 1);

  const sortedArray = new SortedArray([]);

  for (const item of input) {
    sortedArray.insert(item);
    console.log(computeMedian(sortedArray.array)!.toFixed(1));
  }

}