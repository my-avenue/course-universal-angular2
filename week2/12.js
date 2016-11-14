function countElement(array) {
  return array.reduce((result, item) => (result[item] = ++result[item] || 1, result), {})
}


console.log(countElement([1, 2, 3, 2, 1]))

/* ได้ผลลัพธ์คือ
{
  1: 2, // มี 1 อยู่ทั้งหมด 2 ตัวในอาร์เรย์
  2: 2, // มี 2 อยู่ทั้งหมด 2 ตัวในอาร์เรย์
  3: 1  // มี 3 อยู่ทั้งหมด 1 ตัวในอาร์เรย์
}
*/