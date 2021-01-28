import * as _ from '.'

export const odo = _.word('odo', {
  action: 'to leave',
  etym: () => [_.oda, _.oC],
  see: () => [_.odu, _.dau],
})

// === alt

export const ahodo = _.alt('ahodo', {
  glo: 'they1.**leave**',
  alt: () => _.odo,
})
