
# Tarefa 28 - Teste de Performance com K6

Este projeto contém um teste de performance usando a ferramenta **K6**.

## Pré-requisitos
- Node.js (opcional, se quiser rodar localmente)
- Docker (opcional)

---

## Como rodar sem Docker (via terminal)

1. Instale o K6 na sua máquina:
   ```bash
   choco install k6  # Windows (via Chocolatey)
   brew install k6   # MacOS
   ```

2. Rode o teste:
   ```bash
   k6 run tests/load-test.js
   ```

---

## Como rodar com Docker

1. Crie a imagem Docker:
   ```bash
   docker build -t tarefa28-k6 .
   ```

2. Execute o teste:
   ```bash
   docker run --rm tarefa28-k6
   ```

---

## Estrutura do projeto
```
tarefa-28-performance/
│
├── tests/
│   └── load-test.js
│
├── Dockerfile
└── README.md
```
