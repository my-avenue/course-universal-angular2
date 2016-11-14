function reverse(text, result = null){
   if(text === undefined){
      throw 'Missing Parameter'
   }
   if((text || '').length == 0){
     return result
   }
   return reverse(text.slice(0,-1), (result || '') + text.slice(-1))
}

console.log(reverse('hello')) // olleh
console.log(reverse('Somchai Haha')) // ahaH iahcmoS
console.log(reverse(null)) // null
console.log(reverse()) // throw error: Missing Parameter