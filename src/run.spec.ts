import { run } from './run';
import { promiseFile } from './load-array';

describe('run', () => {
  let original: (message?: any, ...optionalParams: any[]) => void;
  const results: number[] = [];

  beforeAll(() => {
    original = console.log;
    console.log = (message: any) => results.push(message);
  });

  beforeEach(() => results.length = 0);

  for (const code of ['00', '01', '02', '03', '04']) {

    it('runs with' + code, async () => {
      process.argv[2] = `src/test-data/input${code}.txt`;
      const output = await readOutput(`src/test-data/output${code}.txt`);
      await run();
      expect(results).toEqual(output);
    });
  }

  afterAll(() => {
    console.log = original;
  });
})

async function readOutput(path: string) {
  const contents = await promiseFile(path);
  const chars = contents.toString();
  return chars.split('\n').filter(Boolean);
}