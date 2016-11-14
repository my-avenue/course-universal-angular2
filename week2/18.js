const myFamily = [
  {
    name: 'Somchai',
    sex: 'male',
    born: '1999-08-01',
    died: '2015-07-07'
  }, {
  	name: 'Somsree',
    sex: 'female',
    born: '1899-08-01',
    died: '1995-07-07'
  }, {
  	name: 'Somnumna',
    sex: 'female',
    born: '1999-08-01',
    died: '2014-02-07'
  }, {
  	name: 'Somtum',
    sex: 'male',
    born: '1899-08-01',
    died: '1915-07-07'
  }
]

const dateToAge = (born, died) => died.split('-')[0] - born.split('-')[0]

const maleFilter = (myFamily) => myFamily.filter(({sex: sex}) => sex==='male')
const femaleFilter = (myFamily) => myFamily.filter(({sex: sex}) => sex==='female')
const ageLower100YearFilter = (myFamily) => myFamily.filter(({born: born, died: died}) => dateToAge(born, died) < 100)
const ageUpper50YearFilter = (myFamily) => myFamily.filter(({born: born, died: died}) => dateToAge(born, died) > 50)

const compose = (...fns) => (arg) => fns.reduce((result, fn) => fn(result), arg)

const solution1 = compose(maleFilter,ageLower100YearFilter)(myFamily)
const solution2 = compose(femaleFilter,ageUpper50YearFilter)(myFamily)