
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 }, // sobe para 10 usuários
    { duration: '1m', target: 10 },  // mantém 10 usuários por 1 minuto
    { duration: '30s', target: 0 },  // reduz para 0 usuários
  ],
};

export default function () {
  let res = http.get('https://www.lojaebac.ebaconline.art.br/');

  check(res, {
    'status code é 200': (r) => r.status === 200,
    'tempo de resposta < 2s': (r) => r.timings.duration < 2000,
  });

  sleep(1);
}
