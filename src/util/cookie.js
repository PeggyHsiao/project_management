function getCookieByName(name) {
  const pair = document.cookie.match(new RegExp(`${name}=([^;]+)`));
  return pair ? pair[1] : null;
}

function delCookie(name) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookieByName(name);
  document.cookie = `${name}=${cval};  expires=${exp.toGMTString()}`;
}

function setCookie(name, value, minutes) {
  let expires = '';
  if (minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

export {
  getCookieByName,
  delCookie,
  setCookie,
};
