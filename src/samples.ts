const samples = [
  // OK Samples
  '12+(1+2)',
  'asd(asd)',
  '(asd(asd))',
  '(asdasd)',
  '[asdasd]',
  '[as(d)asd]',
  '[as(d)[asd]]',
  '[as((d)[asd])]',
  '([as((d)[asd])](complicado[y mucho]))',
  'texto',
  // KO Samples
  'assdd[',
  '(assdd',
  'as(sdd',
  'as(sd]d',
  '[as(sd]d)',
  '[(as(sd)]d)',
  '(([assd)]d)',
  '[as(sd)]d)',
  '[as',
  'as)',
];

export default samples;