# 📈 StockTrader Lite

> Aplicação full-stack para gestão de negociações na bolsa, desenvolvida com **MVC**, **TDD** e princípios de **Clean Code**.

[ [&#x1F1FA;&#x1F1F8;] Read the English version here](./README.md)

## 📂 Estrutura do Projeto (Monorepo)

Este repositório está organizado em domínios independentes para garantir a escalabilidade:

- **[`/client`](./client):** Aplicação Frontend em Vanilla JS (ES6+). Possui arquitetura **MVC**, persistência local com **IndexedDB** e desenvolvimento com metodologia **TDD** utilizando a biblioteca de testes **Jest**.

- **[`/server`](./server/):** _(Futuro)_ API em Node.js para prover persistência em nuvem e lógica de negócio centralizada.

## 🛠️ Destaques Técnicos

- **Confiabilidade:** 100% de cobertura da lógica de negócio com **Jest**.
- **Persistência:** Armazenamento local de alta performance via **IndexedDB API**.
- **Arquitetura:** Separação estrita de responsabilidades (Model-View-Controller).

## 🚀 Como Iniciar

Consulte a documentação específica de cada módulo:

1.  **Desenvolvimento Frontend:** [Guia do Client](./client/README.md)
2.  **Desenvolvimento Backend:** [Guia do Server](./server/README.md) _(Em breve)_
