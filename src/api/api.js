const BASE_URL = 'https://tzfrontend.herokuapp.com';

export function getImages() {
  return fetch(`${BASE_URL}/images/`)
    .then(response => (!response.ok
      ? new Error(`${response.status} - ${response.statusText}`)
      : response.json()));
}

export function getModalImage(imageId) {
  return fetch(`${BASE_URL}/images/${imageId}`)
    .then(response => (!response.ok
      ? new Error(`${response.status} - ${response.statusText}`)
      : response.json()));
}

export function getComments(imageId) {
  return fetch(`${BASE_URL}/comments/${imageId}`)
    .then(response => (!response.ok
      ? new Error(`${response.status} - ${response.statusText}`)
      : response.json()));
}

export function updateCommentList(newComment) {
  return fetch(`${BASE_URL}/comments/add`, {
    method: 'post',
    body: JSON.stringify(newComment),
  });
}
