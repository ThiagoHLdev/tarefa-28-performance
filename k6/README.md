# Testes de Performance com K6

Este diretório contém scripts de teste de carga utilizando a ferramenta [K6](https://k6.io).

## Como executar

1. Instale o K6 na sua máquina: [Instruções de instalação](https://k6.io/docs/getting-started/installation/)
2. No terminal, entre neste diretório:
   ```bash
   cd k6
   ```
3. Execute o script:
   ```bash
   k6 run script-test.js
   ```

O teste irá simular 10 usuários acessando o site por 30 segundos.
