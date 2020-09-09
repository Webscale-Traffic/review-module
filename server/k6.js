import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1s', target: 100 },
    { duration: '10s', target: 500 },
    { duration: '30s', target: 1000 }
  ],
};

export default function() {
  let roomID = Math.floor(Math.random() * 9999999) + 1;
  let res = http.get(`http://localhost:3003/rooms/${roomID}/reviews`);
  check(res, { 'status was 200': r => r.status == 200 });
  sleep(1);
}