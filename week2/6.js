const isEmpty = (arr = []) => {
   const [a] = arr
   return a === undefined
}

console.log(isEmpty()) // true
console.log(isEmpty([])) // true
console.log(isEmpty([null])) // false
console.log(isEmpty([1, 2])) // false