import type { PageLoad } from './$types'

export interface Word {
  word: string
  phonetic: string
  phonetics: {
    text: string
    audio?: string
  }[]
  origin: string
  meanings: {
    partOfSpeech: string
    definitions: {
      definition: string
      example?: string
      synonyms?: string[]
      antonyms?: string[]
    }
  }[]
}

export const load: PageLoad = (async ({
  route,
  params,
  fetch
}) => {
  const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello', {
    // params: {},
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })

  return {
    words: await res.json(),
  }
})
