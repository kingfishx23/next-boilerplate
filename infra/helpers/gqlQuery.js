import { gqlError } from '@/infra/helpers/gqlError'
import { log } from '@/infra/helpers/gqlLogger'
import { urqlClient } from '@/infra/services/urql/clientside'

export async function gqlQuery(Authorization, QUERY, params) {
  try {
    const client = urqlClient(Authorization)
    const query = await client.query(QUERY, params).toPromise()

    if (query?.error?.message) {
      const error = gqlError(query?.error, (str) => str)
      log.error(`gqlQuery ERROR`, error)
      throw error
    } else {
      log.info(`gqlQuery SUCCESS`, { data: query?.data })
      return query
    }
  } catch (error) {
    console.log(error)
    log.error(`gqlQuery ERROR`, error)
    throw error
  }
}
