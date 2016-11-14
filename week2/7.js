const users = [
  { id: 1, name: 'Somchai' },
  { id: 2, name: 'Somsree' }
]

const _ = {
  pluck: (users, key) => users.map(({[key]: value}) => value)
}

console.log(_.pluck(users, 'id')) // [1, 2]