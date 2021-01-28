import * as _ from '.'

export const hao = _.word('hao', {
  noun: 'buste',
  etym: () => [_.ha, _.oda],
})

export const haopa = _.word('haopa', {
  action: 'to yell',
  etym: () => [_.hao, _.pa],
})

// ==== alt

export const ahaopa = _.alt('ahaopa', {
  glo: 'they1.**yell**',
  alt: () => _.haopa,
})
