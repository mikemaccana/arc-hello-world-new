exports.handler = async function http(request) {
  return {
    headers: { 'content-type': 'text/html; charset=utf-8;' },
    body: '<h1>Hello World! 🎉</h1>'
  }
}