import axios from 'axios';

export function request(config) {
  const interfece1 = axios.create({
    baseURL: 'https://httpbin.org',
    method: 'post',
  });

  return interfece1(config);
}

export function request1(config) {
  const interfece2 = axios.create({
    baseURL: 'https://httpbin.org',
    method: 'post',
  });
  return interfece2(config);
}
