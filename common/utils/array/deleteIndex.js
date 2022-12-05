export const deleteIndex = (_arr, index) => {
  let arr = [..._arr]

  if (arr.length === 1) {
    arr.pop()
    return arr
  } else {
    arr.splice(index, 1)
    return arr
  }
}
