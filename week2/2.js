// 1.1 
const [, , , a, b] = [1, 2, 3]
console.log(a, b)
// undefined
// undefined

// 1.2
let a = 1, b = 2
[b, a] = [a, b]
console.log(a, b)
// 2
// 1

// 1.3  
const [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]]
console.log("a:", a, "b:", b, "c:", c, "d:", d)
/*
"a:"
1
"b:"
2
"c:"
[[3, 4], 5
"d:"
6
*/

// 1.4 
const {
  prop: x,
  prop2: {
    prop2: {
      nested: [ , , b]
    }
  }
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}}
console.log(x, b)
// "Hello"
// "c"
