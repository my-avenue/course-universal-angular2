class Set {
  
   constructor(setDefault) {
     this.setDefault = setDefault
   }
  
   intersect(setNew){
     return this.getSet().filter(
       (ele) => setNew.getSet().includes(ele)
     )
   }
  
   union(setNew){
     return [...this.getSet(), ...setNew.getSet()].reduce(
       (result, item) => result.includes(item) ? result : [...result, item]
     , [])
   }
  
   differ(setNew){
     return this.getSet().filter(
       (el) => !setNew.getSet().includes(el)
     )
   }
  
   getSet(){
     return this.setDefault
   }
  
}

const setA = new Set([1, 2, 3, 4, 5])
const setB = new Set([2, 3, 7, 1])


console.log(setA.intersect(setB))
console.log(setA.union(setB))
console.log(setA.differ(setB))
