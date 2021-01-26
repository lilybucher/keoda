import * as _ from '.'

export const fa = _.word('fa', {
  noun: 'eyes',
  verb: 'to look',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Arctic_Fox_1_%2810549184013%29.jpg/400px-Arctic_Fox_1_%2810549184013%29.jpg',
  desc: () => `
${_.phrase('Show your eyes.', _.guwu, _.faham)}

${_.phrase('Look at my hand.', _.fa, _.matom)}
`,
})

export const gufa = _.word('gufa', {
  noun: 'pupil (life of the eye)',
  glo: 'pupil',
  etym: () => [_.gu, _.fa],
})

export const falo = _.word('falo', {
  noun: 'sadness',
  verb: 'to be sad',
  etym: () => [_.fa, _.lo],
  see: () => [_.falame],
  desc: () => `
${_.phrase("Don't be sad.", _.nefalo)}`,
})

export const fahata = _.word('fahata', {
  noun: 'mirror',
  verb: 'to reflect',
  etym: () => [_.fa, _.ta],
})

// === alt

export const nefalo = _.alt('nefalo', {
  glo: 'NEG.**be sad**',
  alt: () => _.falo,
})

export const faham = _.alt('faham', {
  glo: '**eyes**.ACC',
  alt: () => _.fa,
})

export const fatam = _.alt('fatam', {
  glo: '**eyes**.3SG.POSS.ACC',
  alt: () => _.fa,
})

export const ofa = _.alt('ofa', {
  glo: '1SI.**look**',
  alt: () => _.fa,
})

export const ifa = _.alt('ifa', {
  glo: '2SG.**see**',
  alt: () => _.fa,
})

export const afa = _.alt('afa', {
  glo: '3SG.**see**',
  alt: () => _.fa,
})

export const pifa = _.alt('pifa', {
  glo: '1SG.**see**',
  alt: () => _.fa,
})

export const fahataye = _.alt('fahataye', {
  glo: '**mirror**.ACC',
  alt: () => _.fahata,
})

export const shafa = _.alt('shafa', {
  glo: '3PL.**look**',
  alt: () => _.fa,
})

export const fatom = _.alt('fatom', {
  glo: '**eyes**.POSS.1SI',
  alt: () => _.fa,
})

export const ofalem = _.alt('ofalem', {
  glo: '1SI.**see**.PST',
  alt: () => _.fa,
})

export const fatinam = _.alt('fatinam', {
  glo: '**eyes**.POSS.2SG.ACC',
  alt: () => _.fa,
})
