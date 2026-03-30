# 💻 StockTrader Lite Frontend

> Frontend de alta confiabilidade construído com **Vanilla JS**, arquitetura **MVC** e **TDD**.

[ [&#x1F1FA;&#x1F1F8;] Read the English version here](./README.md)

## 🎯 Visão Geral

Este é o núcleo da interface do StockTrader Lite. Ele gerencia o registro de negociações (Data, Quantidade e Valor) diretamente no navegador, garantindo a integridade dos dados através de regras de negócio estritas e testes automatizados.

## 🛠️ Roadmap de Desenvolvimento

- [✅] **Infraestrutura & Setup**
  - [✅] Configuração do Jest para ES6 Modules.

## 🏗️ Estrutura Interna

O projeto segue uma separação clara de responsabilidades dentro do diretório `/app`:

- **`index.html`**: Ponto de entrada da aplicação.
- **`/css`**: Estilos globais e definições de layout.
- **`/app`**: Núcleo da lógica (Model-View-Controller).
- **`/tests`**: Suítes de testes Jest para o fluxo TDD.

## 🧪 TDD Workflow

A qualidade do código foi priorizada através da escrita de testes antes da implementação (**Red-Green-Refactor**).

### Executando Testes

Dentro da pasta `client`, utilize:

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch (Recomendado para desenvolvimento)
npm run test:watch
```

## 💾 Persistência Local

Os dados são armazenados utilizando a **IndexedDB API**, fornecendo uma solução robusta de armazenamento NoSQL que mantém as negociações seguras mesmo após fechar o navegador, sem depender de um backend nesta fase.

## 🛠️ Stack Tecnológica

- **Linguagem:** JavaScript (Módulos ES6+)
- **Arquitetura:** MVC (Model-View-Controller)
- **Persistência:** IndexedDB (API nativa do navegador)
- **Testes:** Jest (TDD)
- **Estilização:** CSS3 (Flexbox/Grid)
