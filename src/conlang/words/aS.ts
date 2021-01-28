import * as _ from '.'

export const aS = _.word('a', {
  id: 'aS',
  noun: '**they¹**',
  pref: 'their',
  suff: 'their',
  see: () => [_.aC, _.subj],
})

export const ada = _.word('ada', {
  noun: '**they¹ self**',
  glo: '**they1**.self',
  etym: () => [_.aS, _.da],
  see: () => [_.subj],
})

// === alt

export const futam = _.alt('futam', {
  glo: 'to.**they1**+',
  alt: () => _.aS,
})
