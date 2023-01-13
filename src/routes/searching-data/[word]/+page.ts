import type { PageLoad } from './$types'

export const load: PageLoad = (async ({
  route,
  params,
  fetch
}) => {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${params.word}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })

  return {
    words: await res.json(),
  }
})
