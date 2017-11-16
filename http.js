const myHeaders = new Headers()
myHeaders.append('Accept', 'application/json')
myHeaders.append('Content-Type', 'application/json')
const testAuthorization = 'JWT e30=.eyJ1c2VyX2lkIjogMSwgImVtYWlsIjogIm1wZXJtYW5hQGhvdG1haWwuY29tIn0=.='
const testAuthorizationUser2 = 'JWT e30=.eyJ1c2VyX2lkIjogMn0=.='
myHeaders.append('Authorization', localStorage.getItem('authorization') || testAuthorization)

export function get(url, body) {
  return fetch(url, {
    method: 'GET',
    headers: myHeaders,
  }).then(response => response.json())
}

export function fetchDelete(url) {
  console.log('delete', url)
  return fetch(url, {
    method: 'DELETE',
    headers: myHeaders
  }).then(response => response.json())
}

export function post(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body)
  }).then(response => response.json().then(json => json.value))
}

export function put(url, body) {
  return fetch(url, {
    method: 'PUT',
    headers: myHeaders,
    body: JSON.stringify(body)
  }).then(response => response.json())
}
