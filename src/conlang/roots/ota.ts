import * as _ from '../lang'

export const ota = _.word('ota', {
  noun: 'circle',
  adv: 'again',
})

export const lamota = _.word('lamota', {
  noun: `circle around urethra`,
  etym: () => [_.lam, _.ota],
})

export const hamunota = _.word('hamunon', {
  noun: 'areola',
  etym: () => [_.hamun, _.on],
})

export const kepalota = _.word('kepalota', {
  noun: `circle around the anus`,
  etym: () => [_.kepal, _.ota],
})
