export default function handleResponseFromApi(promise) {
  return promise
    .then((success) => {
      return { status: 200, body: 'success' };
    })
    .catch(() => new Error({}))
    .finally(
      console.log('Got a response form the API')
    )
}
