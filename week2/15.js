
const compact = (array) => array.filter((ele) => ele) 

console.log(compact([0, 1, false, 2, '', 3, NaN])) // [1, 2, 3]