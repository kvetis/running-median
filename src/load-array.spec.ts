import { loadArray } from './load-array';

test('reads the file', async () => {
  const array = await loadArray('src/test-data/input00.txt');
  expect(array).toEqual([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]);
});