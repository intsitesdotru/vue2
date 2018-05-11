const URL_BASE = process.env.NODE_ENV === 'production' ? 'http://your-web-api-domen' : 'http://your-local-api'
const API_VERSION = '/v1'

const API_BASE = URL_BASE + API_VERSION

export {API_BASE}

export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: ''
}
