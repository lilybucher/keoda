import * as _ from '.'

export const zu = _.word('zu', {
  def: 'heart',
  verb: 'to love',
  see: () => [_.au],
})

export const zuzu = _.word('zuzu', {
  verb: 'to make love',
  see: () => [_.auau],
  etym: () => [_.zu, _.zu],
})

export const zunes = _.word('zunes', {
  def: 'love',
  etym: () => [_.zu, _.nes],
})

export const zuzupa = _.alt('zuzupa', {
  glo: '**make love**.MYST',
  alt: () => _.zuzu,
})

export const ozu = _.alt('ozu', {
  glo: 'wex.**heart**',
  alt: () => _.zu,
})

export const shozuzu = _.alt('shozuzu', {
  glo: '1PL.PRS.**make love**',
  alt: () => _.zuzu,
})
