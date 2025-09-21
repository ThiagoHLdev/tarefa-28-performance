# Tarefa 28 - Testes de Performance

Este projeto contém testes de performance para a API EBAC Demo Store.

## Endpoints Testados
- **Produtos:** `/produtos`
- **Clientes:** `/clientes`

## Ferramentas utilizadas
- [Apache JMeter](https://jmeter.apache.org/)
- Node.js (para rodar a API localmente)

## Como executar

### 1. Clonar este repositório
```bash
git clone https://github.com/ThiagoHLdev/tarefa-28-performance.git
cd tarefa-28-performance
```

### 2. Subir a API localmente
Clone o servidor e rode localmente:

```bash
git clone https://github.com/EBAC-QE/ebac-demo-store-server.git
cd ebac-demo-store-server
npm install
npm start
```

A API estará disponível em `http://localhost:3000`.

### 3. Executar os testes
```bash
# Teste de produtos
jmeter -n -t testes/produtos.jmx -l resultados/produtos.csv -e -o resultados/produtos

# Teste de clientes
jmeter -n -t testes/clientes.jmx -l resultados/clientes.csv -e -o resultados/clientes
```

Os relatórios HTML estarão disponíveis em:
- `resultados/produtos/index.html`
- `resultados/clientes/index.html`

## Configurações dos testes
- **Usuários virtuais (threads):** 10
- **Ramp-up:** 5 segundos
- **Requisições por usuário:** 20

## Estrutura do projeto
```
tarefa-28-performance
│
├── README.md
├── testes
│   ├── produtos.jmx
│   └── clientes.jmx
└── resultados
    ├── produtos.html
    └── clientes.html
```
