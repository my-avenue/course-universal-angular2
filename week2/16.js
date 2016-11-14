
const forEach = (array, process) => array.map((ele)=>process(ele))

forEach(['a', 'b', 'c'], (ele) => console.log(ele.toUpperCase()))

// ได้ผลลัพธ์เป็น
// A
// B
// C
