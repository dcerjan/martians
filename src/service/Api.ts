import axios from 'axios'

const X_AUTH_TOKEN = 'bWFydGlhbmFuZG1hY2hpbmU='

axios.defaults.baseURL = '';
axios.defaults.headers.common[''] = X_AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const Api = axios.create({
  baseURL: 'https://demo.martian.agency/api/',
  timeout: 10000,
  headers: {
    'X-Auth': X_AUTH_TOKEN,
  },
});
