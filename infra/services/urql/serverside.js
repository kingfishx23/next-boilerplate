import { cacheExchange, createClient, dedupExchange, fetchExchange } from 'urql'

export const urqlClient = (Authorization) => {
  let exchanges = [dedupExchange, cacheExchange, fetchExchange]

  return createClient({
    url: `${process.env.NEXT_PUBLIC_API_HTTP}/graphql`,
    fetchOptions: {
      headers: {
        Authorization: Authorization,
      },
    },
    exchanges,
  })
}
