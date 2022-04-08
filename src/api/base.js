import axios from 'axios';
import _ from 'lodash';
import { getCookieByName } from '@/util/cookie';

const webAPIRoot = process.env.NODE_ENV === 'production' ? '/waconfig' : 'http://localhost/waconfig';

// axios.interceptors.response.use((res) => {
//   const { reason, error } = res.data.data;
//   // dialog.showDialog();
//   if (error < 0) {
//     // if (res.data.data.error === -100) router.push({ name: 'Login' });
//     // else {
//     //   // EventBus.$emit('show', res.data.data.reason, res.data.data.error);
//     // }
//     return Promise.reject(reason);
//   }
//   return res;
// });

const baseData = () => ({ csrfToken: getCookieByName('csrfToken') });

const baseConfig = {
  baseURL: `${webAPIRoot}/api`,
  withCredentials: true,
  timeout: 1 * 60 * 60 * 1000, // 1hr
};

function getRequest(url, config = {}) {
  if (!url) throw new Error('name is required.');
  const thisURL = url;
  const thisConfig = _.assign(baseConfig, config);

  return axios.get(thisURL, thisConfig);
}

function postRequest(url, data = {}, config = {}) {
  if (!url) throw new Error('name is required.');
  const thisURL = url;
  const thisData = _.assign(baseData(), data);
  const thisConfig = _.assign(baseConfig, config);

  return axios.post(thisURL, thisData, thisConfig);
}

function putRequest(url, data = {}, config = {}) {
  if (!url) throw new Error('name is required.');
  const thisURL = url;
  const thisData = _.assign(baseData(), data);
  const thisConfig = _.assign(baseConfig, config);

  return axios.put(thisURL, thisData, thisConfig);
}
function postRequestWithoutToken(url, data = {}, config = {}) {
  if (!url) throw new Error('name is required.');

  const thisURL = url;
  const thisData = _.assign(data);
  const thisConfig = _.assign(baseConfig, config);

  return axios.post(thisURL, thisData, thisConfig);
}

export {
  getRequest,
  postRequest,
  putRequest,
  postRequestWithoutToken,
};
