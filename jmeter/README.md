# Testes de Performance com JMeter

Este diretório contém um plano de teste utilizando [Apache JMeter](https://jmeter.apache.org/).

## Como executar

1. Instale o JMeter em sua máquina.
2. Abra o JMeter.
3. Clique em **File > Open** e selecione o arquivo `teste-performance.jmx`.
4. Execute o teste no menu **Run > Start**.

O teste irá simular 10 usuários fazendo 5 requisições GET para `https://test.k6.io`.
