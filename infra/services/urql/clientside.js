import { SubscriptionClient } from 'subscriptions-transport-ws'
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
} from 'urql'

const isServer = typeof window === 'undefined'

export const urqlClient = (Authorization) => {
  let exchanges = [dedupExchange, cacheExchange, fetchExchange]

  if (!isServer) {
    const subscriptionClient = new SubscriptionClient(
      `${process.env.NEXT_PUBLIC_API_WS}/subscriptions`,
      {
        reconnect: true,
        connectionParams: {
          authToken: Authorization,
        },
      },
    )
    exchanges.push(
      subscriptionExchange({
        forwardSubscription: (operation) =>
          subscriptionClient.request(operation),
      }),
    )
  }

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
