const findLongestWord = (array) => (array || []).reduce(
  (result, item) =>
      (result || '').length < item.length
      ? item
      : result
, null)


console.log(findLongestWord()) // null
console.log(findLongestWord([1, 2, 3])) // null
console.log(findLongestWord(['Somchai', 'Somsree', 'Somset', 'Somnumna'])) // Somnumna
console.log(findLongestWord(['Hi', 'Hello', 'World'])) // Hello