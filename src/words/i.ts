import * as _ from '.'

export const i = _.word('i', {
  noun: 'caresser',
  prefix: 'à toi',
  conj: 'tu',
  desc: () =>
    `Il y a une exception pour le suffixe ajouté à ${_.ma} (main): dans ce cas, on ne dit pas 'mai' mais directement ${_.mi}.`,
})
_.see(_.imaconj)

_.see(_.ti)
_.see(_.pronouns)

export const iha = _.word('iha', {
  noun: 'toi poétique',
  derived: [_.i, _.yada],
})

export const ida = _.word('ida', {
  noun: 'toi',
  derived: [_.i, _.oda],
})

_.see(_.mioda)
_.see(_.amimoon)
_.see(_.imiyon)
_.see(_.djobajioda)
_.see(_.olirimataj)

export const imiyon = _.example([_.i, _.mi, _.yon], `Masse-toi la vulve.`)
export const imimoon = _.example([_.i, _.mi, _.mun], 'Masse-toi les seins.')
