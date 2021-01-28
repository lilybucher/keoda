import * as _ from '.'

export const laj = _.word('laj', {
  def: 'smile',
  verb: 'to smile',
  etym: () => [_.la, _.aj],
})

// === alt

export const lajatim = _.alt('lajatim', {
  glo: '**smile**.you1+',
  alt: () => _.laj,
})
