import { postRequest, postRequestWithoutToken } from './base';

function login(data) {
  return postRequestWithoutToken('/login', data);
}

function logout(data) {
  return postRequest('/logout', data);
}

export {
  login,
  logout,
};
