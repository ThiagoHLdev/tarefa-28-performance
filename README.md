# Tarefa 28 – Testes de Performance

Este repositório contém os testes de performance realizados com as ferramentas **K6** e **Apache JMeter**.

## 📂 Estrutura
- **k6/** → scripts em JavaScript para execução de testes de carga com K6.
- **jmeter/** → planos de teste em formato `.jmx` para execução no Apache JMeter.

## ▶️ Como rodar os testes

### K6
```bash
cd k6
k6 run script-test.js
```

### JMeter
1. Abra o JMeter.
2. Clique em **File > Open** e selecione o arquivo `teste-performance.jmx`.
3. Execute o teste no menu **Run > Start**.

---
> Autor: Thiago Henrique Leite
