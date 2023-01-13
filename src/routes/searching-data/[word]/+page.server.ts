import type { PageServerLoad } from './$types'

export const load: PageServerLoad = (async ({
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
    data: await res.json(),
  }
})
