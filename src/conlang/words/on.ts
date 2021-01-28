import * as _ from '.'

export const on = _.word('on', {
  noun: 'source',
  action: 'to reveal',
})

_.see(_.yon)

export const lamon = _.word('lamon', {
  noun: 'urethra',
  etym: () => [_.lame, _.on],
})

export const yaon = _.word('yaon', {
  noun: 'dusk',
  etym: () => [_.ya, _.on],
})

export const yohon = _.word('yohon', {
  noun: 'dawn',
  etym: () => [_.yo, _.on],
})
