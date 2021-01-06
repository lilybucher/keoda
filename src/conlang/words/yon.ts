import * as _ from '.'

export const yon = _.word('yon', {
  noun: 'vulva',
  etym: () => [_.yu, _.on],
})

export const riyon = _.word('riyon', {
  noun: 'peripheral lips',
  etym: () => [_.ri, _.yon],
})

export const royon = _.word('royon', {
  noun: 'central lips of the vulva',
  etym: () => [_.ro, _.yon],
})
export const yonin = _.word('yonin', {
  noun: 'hot vulva, erect',
  etym: () => [_.yon, _.in],
})
export const yonegi = _.word('yonegi', {
  noun: 'cold vulva, sleeping',
  etym: () => [_.yon, _.egi],
})

_.see(_.genitals)

export const keyon = _.word('keyon', {
  noun: 'clitoris',
  see: () => [_.yoneri],
  etym: () => [_.ke, _.yon],
})

export const mukeyon = _.example([_.mu, _.keyon], `Pince-moi le clitoris.`)

export const feyon = _.word('feyon', { noun: 'culotte' })

_.see(_.nemafeyon)

_.see(_.yaj)
_.see(_.keyon)

// === alt

export const yonam = _.alt('yonam', {
  glo: '**vulva**.ACC',
  alt: () => _.yon,
})
