import { readFile } from 'fs';
import { promisify } from 'util';

/**
 * Promisified version of 'fs.readFile'
 */
export const promiseFile = promisify(readFile);

/**
 * Loads an input file.
 * Supported format is one number per line.
 * @param path path to file to load
 */
export async function loadArray(path: string): Promise<number[]> {
  if (!path) {
    throw new Error('No path specified');
  }
  const contents = await promiseFile(path);
  const chars = contents.toString();
  return chars.split('\n').filter(Boolean)
    .map(parseFloat);
}