/* eslint-disable no-console */
import samples from './samples';

const openners = ['(', '['];
const clossers = [')', ']'];

const isCorrectSample = (sample: string): boolean => {
    const stack = new Array<number>();
    for (let index = 0; index < sample.length; index++) {
      const chart = sample[index];
      const oppenerIndex = openners.indexOf(chart);
      if (oppenerIndex > -1) {
        stack.push(oppenerIndex);
      }
      
      const closserIndex = clossers.indexOf(chart);
      if (closserIndex > -1) {
        const expected = stack.pop();
        if (expected !== closserIndex) {
          return false;
        }
      }
    }
    return stack.length === 0;
};

const result = samples.map(sample => ({
  sample,
  ok: isCorrectSample(sample),
}));

console.table(
  result
);