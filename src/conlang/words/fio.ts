import * as _ from '.'

export const fio = _.word('fio', {
  adj: 'eggplant (color)',
  see: () => [_.colors],
})

export const fiona = _.word('fiona', {
  def: 'eggplant (vegetable)',
  etym: () => [_.fio, _.na],
})
