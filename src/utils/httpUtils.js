import axios from 'axios';

/**
 * Send GET request to server.
 * @param {String} url
 * @return {Promise.<T>|Promise<T>}
 */
async function get(url) {
  return axios.get(url, {
    headers: {
      'Authorization': await _getAccessToken(),
      'Accept': 'application/json'
    }
  }).then(response => {
    return response.data;
  }).catch(error => {
    throw (error.message);
  });
}

/**
 * Send array of request promises.
 * @param {Array} array of request promises
 * @return {Promise.<T>|Promise<T>}
 */
async function all(requests) {
  return axios.all(requests).then(response => {
    return response;
  }).catch(error => {
    throw (error.message);
  });
}

/**
 * Send POST request to server
 * @param {String} url
 * @param {Object} body
 * @return {Promise.<T>|Promise<T>}
 */
async function post(url, body) {
  return axios.post(url, body, {
    headers: {
      'Authorization': await _getAccessToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.data;
  }).catch(error => {
    throw (error.message);
  });
}

/**
 * Send PUT request to server
 * @param {String} url
 * @param {Object} body
 * @return {Promise.<T>|Promise<T>}
 */
async function put(url, id, body) {
  let putUrl = `${url}/${id}`;

  return axios.put(putUrl, body, {
    headers: {
      'Authorization': await _getAccessToken(),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.data;
  }).catch(error => {
    throw (error.message);
  });
}

/**
 * Get access token from AsyncStorage.
 * @return {Promise.<TResult>|*}
 * @private
 */
let _getAccessToken = async() => {
  return 'Get access token from local storage and return';
};

export { get, post, put, all };
