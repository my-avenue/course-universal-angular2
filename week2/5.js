const links = [
  'https://www.babelcoder.com/blog/posts/typescript-classes',
  'https://www.babelcoder.com/blog/posts/react-redux-isomorphic-day4-react-redux-isomorphic',
  'https://www.babelcoder.com/blog/posts/create-react-app-with-no-configuration',
  'https://www.babelcoder.com/blog/posts/angular2-angular-cli',
  'https://www.babelcoder.com/blog/posts/typescript-data-types'
]   

const slugs = links.map((link) => {
  const [, slug] = /.*\/(.*)$/.exec(link) || [,null]
  return slug
})

console.log(slugs)


