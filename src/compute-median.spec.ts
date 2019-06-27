import { computeMedian } from './compute-median';

describe('computeMedian', () => {
  it('returns on odd', () => {
    const result = computeMedian([12.5, 24.7, 30.0]);
    expect(result).toBeCloseTo(24.7);
  });
  it('returns on even', () => {
    const result = computeMedian([12.5, 24.7, 25.3, 30.0]);
    expect(result).toBeCloseTo(25);
  });
  it('returns empty on empty', () => {
    const result = computeMedian([]);
    expect(result).toBeUndefined();
  });
})