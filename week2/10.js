function delay(time, message) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(message), time*1000)
  )
}


delay(5, 'Hello World')
  .then(message => console.log(message))