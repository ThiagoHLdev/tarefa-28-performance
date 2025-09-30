import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10, // número de usuários virtuais
  duration: '30s', // tempo total do teste
};

export default function () {
  http.get('https://test.k6.io'); // URL de exemplo, trocar se necessário
  sleep(1);
}
