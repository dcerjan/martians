import axios from 'axios'

const X_AUTH_TOKEN = 'bWFydGlhbmFuZG1hY2hpbmU='

export const Api = axios.create({
  baseURL: 'https://demo.martian.agency/api/',
  timeout: 10000,
  headers: {
    'X-Auth': X_AUTH_TOKEN,
    'Content-Type': 'application/json',
  },
});
