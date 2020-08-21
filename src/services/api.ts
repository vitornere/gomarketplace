import axios from 'axios';

const api = axios.create({
  baseURL: 'https://3a4f29066986.ngrok.io',
});

export default api;
