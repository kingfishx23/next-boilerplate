import isEmpty from 'lodash.isempty'
import queryString from 'query-string'

/**
 * stringify query from object form
 * @param  {object} query query object from next router
 */
export function stringifyQuery(query) {
  const string = (!isEmpty(query) ? '?' : '') + queryString.stringify(query)
  return string || ''
}
