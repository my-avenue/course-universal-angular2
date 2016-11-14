const count = (array, search) => array.reduce(((result, item) => item===search? ++result : result) , 0) 


console.log(count([1, 2, 3, 4, 3, 5, 3], 3)) // 3
console.log(count(['hi', 'hello', 'hi'], 'hi')) // 2

