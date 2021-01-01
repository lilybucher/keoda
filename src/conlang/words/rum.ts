import * as _ from '.'

export const rum = _.word('rum', {
  noun: 'arm',
})

export const harum = _.word('harum', {
  noun: 'forearm',
})

export const djorum = _.word('djorum', {
  noun: 'upper arm',
})

export const rumi = _.word('rumi', {
  verb: 'to hug',
})

export const leirumi = _.word('leirumi', {
  verb: 'to embrace time, to live',
  see: () => [_.em],
})
