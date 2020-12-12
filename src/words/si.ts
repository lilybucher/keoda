import * as _ from '.'

export const si = _.word('si', {
  suffix: `comme`,
  desc: () =>
    `Annonce d'une manière qui se terminera par ${_.esi} (sauf si c'est qu'on mot).`,
})
_.see(_.preposition)

export const sigu = _.word('sigu', {
  noun: 'sombre (comme le mystère)',
  derived: () => [_.si, _.gu],
})

export const tajyonsitioa = _.example(
  [_.taj, _.yon, _.si, _.tiona],
  `Pénètre ma vulve comme si c'était une fleur.`
)

export const esi = _.word('esi', {
  suffix: `ainsi, pour, de sorte que`,
})
_.see(_.preposition)

_.see(_.lasimuhadjotionayon)

export const yonsitajkepalesila = _.example(
  [_.yon, _.si, _.fo, _.kepal, _.la],
  `Embrasse ma bouche de ta vulve comme si tu fouettais un anus.`
)
