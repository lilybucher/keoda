import * as _ from '.'

export const ka = _.word('ka', {
  noun: '4 (singularité, qui ne peut pas être pensé)',
  pron: 'tous',
  suffix: 'tous',
  posit: 'à quatre pattes',
  conj: 'us all, universal (1PL.DEF)',
})
_.see(_.kamaconj)
_.see(_.counting)

export const kada = _.word('kada', {
  pron: 'us all (1PL.DEF)',
  etym: () => [_.ka, _.oda],
})
_.see(_.pronouns)

export const ika = _.word('ika', {
  pron: 'à toi, nous toutes et tous',
})

export const hamaka = _.word('hamaka', {
  noun: 'annulaire (4ème doigt)',
  posit:
    'à quatre pattes (indiquée par un signe de main: pouce contre annulaire)',
})

export const neka = _.word('neka', {
  noun: 'shame',
  etym: () => [_.ne, _.ka],
  see: () => [_.gunes, _.fika],
})

export const fika = _.word('fika', {
  adj: 'restless',
  see: () => [_.nunes, _.neka],
})

export const karu = _.word('karu', {
  verb: 'choisir (la réalisation du singulier en soi)',
  etym: () => [_.ka, _.ru],
})
_.see(_.ligau)

export const koda = _.word('koda', {
  noun: 'cow',
  etym: () => [_.ka, _.oda],
})
