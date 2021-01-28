import * as _ from '.'

export const na = _.word('na', {
  suff: 'thing',
  prop: 'humility',
})

export const nena = _.word('nena', {
  noun: 'nothing',
  etym: () => [_.ne, _.na],
})

// === alt

export const nenam = _.alt('nenam', {
  glo: '**nothing**+',
  alt: () => _.nena,
})
