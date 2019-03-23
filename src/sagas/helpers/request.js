import axios from 'axios';

const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
};

function handleError(err) {
  throw err.response;
}

function handleResponse(response) {
  return response.data;
}

export function getRequest(url) {
  return axios
    .get(url, config)
    .then(handleResponse)
    .catch(handleError);
}

export function postRequest(url, data) {
  return axios
    .post(url, data, config)
    .then(handleResponse)
    .catch(handleError);
}

export function putRequest(url, data) {
  return axios
    .put(url, data, config)
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRequest(url, data) {
  return axios
    .delete(url, data, config)
    .then(handleResponse)
    .catch(handleError);
}
