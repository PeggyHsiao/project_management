import { getRequest, postRequest, postRequestWithoutToken } from './base';

function version() {
  return getRequest('/version');
}

function login(data) {
  return postRequestWithoutToken('/login', data);
}

function logout(data) {
  return postRequest('/logout', data);
}

export {
  version,
  login,
  logout,
};
