import * as _ from '.'

export const li = _.word('li', {
  noun: 'mouth',
  verb: 'to suck',
})
_.see(_.liu)

export const lihafma = _.example([_.li, _.hama], `Suce mon doigt.`)
_.see(_.lirlipa)

export const lipa = _.word('lipa', {
  verb: 'to sing',
  etym: () => [_.li, _.pa],
})

export const lipaya = _.word('lipaya', {
  noun: 'wolf',
  etym: () => [_.lipa, _.ya],
})

export const keli = _.word('keli', {
  noun: 'tongue',
  verb: 'to lick',
  etym: () => [_.ke, _.li],
})

export const kelikeyon = _.example([_.keli, _.keyon], `Lèche moi la vulve.`)

export const ligau = _.word('ligau', {
  verb: 'to taste',
  etym: () => [_.li, _.gau],
})
_.see(_.karu)
