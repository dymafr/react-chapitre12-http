import * as axios from 'axios';


axios.defaults.headers.post['Authorization'] = 'xxxx';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.timeout = 4000;


const id = axios.interceptors.request.use( req => {
  console.log('request : ', req);
  return req;
})

axios.interceptors.request.eject(id);

axios.interceptors.response.use( res => {
  console.log('response : ', res);
  return res;
})