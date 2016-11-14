const HTTP_STATUSES = {
  100: 'CONTINUE',
  200: 'OK',
  201: 'CREATED',
  302: 'FOUND',
  401: 'UNAUTHORIZED',
  500: 'INTERNAL SERVER ERROR',
  501: 'NOT IMPLEMENTED'
}
const statuses = Object.entries(HTTP_STATUSES).map(([code,desc]) => desc)

console.log(statuses)