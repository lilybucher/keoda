import * as _ from '.'

export const pu = _.word('pu', {
  noun: 'couleur tomate',
})

export const putam = _.word('putam', {
  noun: 'tomate (fruit), août',
  etym: () => [_.pu, _.tam],
  see: () => [_.fruits],
})
_.see(_.seasons)
