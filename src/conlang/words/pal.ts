import * as _ from '.'

export const pal = _.word('pal', {
  noun: 'butt',
})

export const palaj = _.word('palaj', {
  noun: 'sun',
  etym: () => [_.pal, _.aj],
})

export const palajil = _.word('palajil', {
  noun: 'apricot, July',
  etym: () => [_.palaj, _.le],
  see: () => [_.fruits, _.seasons],
})

export const kepal = _.word('kepal', {
  noun: 'anus',
  etym: () => [_.ke, _.pal],
})

export const palwu = _.alt('palwu', {
  glo: '**butt**.POSS',
  alt: () => _.pal,
})

export const palam = _.alt('palam', {
  glo: '**butt**.DAT',
  alt: () => _.pal,
})
