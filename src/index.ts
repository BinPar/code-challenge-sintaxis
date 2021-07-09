/* eslint-disable no-console */
import samples from './samples';

const isCorrectSample = (sample: string): boolean => {
  let isCorrect = true;
  const openChars: string[] = [];
  for (let i = 0, l = sample.length; i < l && isCorrect; i++) {
    const char = sample[i];
    const [currentOpenChar] = openChars;
    if (char === ')') {
      if (currentOpenChar !== '(') {
        isCorrect = false;
      } else {
        openChars.shift();
      }
    }
    if (char === ']') {
      if (currentOpenChar !== '[') {
        isCorrect = false;
      } else {
        openChars.shift();
      }
    }
    if (char === '(') {
      openChars.unshift(char);
    }
    if (char === '[') {
      openChars.unshift(char);
    }
  }
  return isCorrect && !openChars.length;
};

const result = samples.map(sample => ({
  sample,
  ok: isCorrectSample(sample),
}));

console.table(
  result
);