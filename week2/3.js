  // let [all, year, month, day] = /^([0-9]{4})[-\/ ]([0-9]{2})[-\/ ]([0-9]{2})$/.exec('2016/08/03') // just for fun
 
  let [all, year, month, day] = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec('2016-08-03')
  
  console.log(year, month, day)