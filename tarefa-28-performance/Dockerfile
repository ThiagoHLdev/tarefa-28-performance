
# Usando imagem oficial do K6
FROM grafana/k6:latest

# Copia os testes para o container
WORKDIR /app
COPY ./tests ./tests

# Comando padrão ao rodar o container
CMD ["run", "tests/load-test.js"]
