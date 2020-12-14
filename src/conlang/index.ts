import {
  CompiledEntry,
  CompiledEntryByName,
  DEF_KEYS,
  Entry,
  EntryByName,
  FULLTEXT_KEYS,
} from './types'
import './words'
import { entries, phrases } from './words/0_helpers'

export { CompiledEntry, EntryByName }

const wordList = Object.keys(entries).map(key => entries[key])

function compileWord(word: Entry): CompiledEntry {
  const compiled = Object.assign({}, word, { fulltext: '' }) as CompiledEntry
  const fulltext: string[] = [word.name]
  if (!compiled.glo) {
    // default value to show on gloss
    const key = Object.keys(word).find(key =>
      FULLTEXT_KEYS.includes(key as any)
    )
    compiled.glo = word[key as 'glo']
  }
  if (word.alt) {
    compiled.alt = word.alt().id
  }
  if (word.etym) {
    const etym = word.etym().map(w => w.id)
    compiled.etym = etym
    fulltext.push(...etym)
  }

  if (word.desc) {
    compiled.desc = word.desc()
    fulltext.push(compiled.desc)
  }

  const deriv = wordList.filter(
    w => w.etym && w.etym().find(w => w.id === word.id)
  )
  if (deriv.length) {
    compiled.deriv = deriv.map(w => w.id)
    fulltext.push(...deriv.map(w => w.name))
  }

  if (word.see) {
    const see = word.see()
    compiled.see = see.map(w => w.id)
    fulltext.push(...see.map(w => w.name))
  }

  compiled.fulltext = [
    ...fulltext,
    ...FULLTEXT_KEYS.map(k => compiled[k]).filter(x => x),
  ].join(' ')
  return compiled
}

export function exportJSON(arg: {
  entries: EntryByName
  phrases: EntryByName
}) {
  const entries: CompiledEntryByName = {}
  Object.keys(arg.entries).forEach(key => {
    entries[key] = compileWord(arg.entries[key])
  })
  const phrases: CompiledEntryByName = {}
  Object.keys(arg.phrases).forEach(key => {
    phrases[key] = compileWord(arg.phrases[key])
  })

  return JSON.stringify({ entries, phrases }, null, 2)
}

console.log(exportJSON({ entries, phrases }))
