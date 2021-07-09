/* eslint-disable no-console */
import samples from './samples';

const isCorrectSample = (sample: string): boolean => {
    
};

const result = samples.map(sample => ({
  sample,
  ok: isCorrectSample(sample),
}));

console.table(
  result
);