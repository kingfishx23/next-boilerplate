export const fillWithPlaceholder = (payload, placeholder) => {
  let temp = {}
  Object.keys(payload).map((key) => {
    temp[key] = payload[key] ? payload[key] : placeholder[key]
  })
  return temp
}
