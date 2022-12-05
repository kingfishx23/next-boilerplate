export const gqlError = (rawerror, processStr) => {
  let error = {}
  error.message = rawerror.message.replace('[GraphQL] ', '')
  if (processStr) error.message = processStr(error.message)
  error.meta = rawerror.graphQLErrors[0].extensions.exception
  return error
}
