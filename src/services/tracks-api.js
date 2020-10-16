const BASE_URL = '/api/tracks';

export function getAllUserTracks(id) {
  console.log('getAllUserTracks', id)
  return fetch(`${BASE_URL}/users/${id}`) 
  .then(res => res.json());
}

export function create(job) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(job)
  }).then(res => res.json());
}

export function update(job) {
  return fetch(`${BASE_URL}/${job._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(job)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}