import * as _ from '.'

export const ma = _.word('ma', {
  noun: 'hand',
  verb: 'to take, to hold',
})
_.see(_.mahim)

export const hama = _.word('hama', {
  noun: 'finger',
  etym: () => [_.ha, _.ma],
})

export const djoma = _.word('djoma', {
  noun: 'wrist',
  etym: () => [_.djo, _.ma],
})
_.see(_.djosam)

_.see(_.lihafma)

export const nema = _.word('nema', {
  verb: 'to let go',
  glo: 'NEG.hand.VERB',
  etym: () => [_.ne, _.ma],
})

export const mataj = _.example([_.ma, _.taj], `Prends mon pénis dans ta main.`)

export const mayonmelo = _.example(
  [_.ma, _.yon, _.silo],
  `Branle ma vulve doucement.`
)
_.see(_.nemafeyon)

export const mu = _.word('mu', {
  verb: 'to pull',
  glo: 'hand.VERB.PULL',
  etym: () => [_.ma, _.u],
  see: () => [_.mi, _.mo],
})

export const muhamun = _.example([_.mu, _.hamun], `Tire sur mes tétons.`)

export const mafa = _.example(
  [_.ma, _.fa],
  'Montre ta main (ta main dans nos yeux).'
)
_.see(_.fama)

export const malam = _.word('malam', {
  noun: 'mother (hand of the water)',
  etym: () => [_.ma, _.lam],
})

export const miwi = _.word('miwi', {
  noun: 'butterfly',
  etym: () => [_.mi, _.iwi],
})

export const masa = _.word('masa', {
  noun: 'shovel',
  etym: () => [_.ma, _.sa],
})

export const limasa = _.word('limasa', {
  noun: 'spoon',
  etym: () => [_.lil, _.masa],
})

export const lilimasa = _.word('lilimasa', {
  noun: 'little spoon',
  etym: () => [_.lil, _.limasa],
})
