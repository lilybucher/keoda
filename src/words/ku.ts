import * as _ from '.'

export const ku = _.word('ku', {
  noun: 'corde',
  verb: 'attacher',
})

export const kupa = _.word('kupa', {
  desc: () =>
    `Tout attacher, relation marchande au monde, "faire pour", opposé de ${_.gupi} ou ${_.aupa}.`,
  derived: () => [_.ku, _.pa],
})

export const nekupa = _.word('nekupa', {
  noun: 'lâcher prise, ne pas attacher tout',
  derived: () => [_.ne, _.kupa],
})

export const kulei = _.word('kulei', {
  verb: 'manipuler',
  desc: () =>
    `Attacher le temps, manipuler, relation marchande au temps (si alors).`,
  derived: () => [_.ku, _.lei],
})

export const kuoda = _.word('kuoda', {
  noun: 'victime-bourreau-sauveu.se.r',
  desc: () => `Corps attaché.`,
  derived: () => [_.ku, _.oda],
})

_.see(_.kuga)
