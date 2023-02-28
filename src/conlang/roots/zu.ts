import * as _ from '../lang'

export const zu = _.word('zu', {
  verb: 'to love',
  noun: 'heart',
  adv: 'lovingly',
  adj: 'lovely',
  see: () => [_.au],
  desc: () => `
  
  `,
})

export const zuhu = _.word('zuhu', {
  noun: 'to fall in love',
  desc: () => `
The pull of the heart.
`,
  etym: () => [_.zu, _.u$],
})

export const zuzu = _.word('zuzu', {
  verb: 'to make love',
  see: () => [_.aulau, _.kude],
  etym: () => [_.zu, _.zu],
})

export const zulapa = _.word('zulapa', {
  noun: 'the voice from the heart',
  etym: () => [_.zu, _.lapa],
})

export const zulus = _.word('zulus', {
  noun: 'vulnerability',
  adj: 'vulnerable',
  etym: () => [_.zu.verb, _.us.adj],
})
