# 📈 StockTrader Lite

> A full-stack solution for stock market trade management built with **MVC**, **TDD**, and **Clean Code** principles.

[ [&#x1F1E7;&#x1F1F7;] leia a versão em Português aqui](README.pt-br.md)

## 📂 Project Structure (Monorepo)

This repository is organized into independent domains to ensure scalability:

- **[`/client`](./client):** Frontend application built with Vanilla JS (ES6+). It features an **MVC** architecture, **IndexedDB** for local persistence, and a **TDD** workflow using Jest.

- **[`/server`](./server/):** _(Future)_ Node.js API to provide cloud persistence and centralized business logic.

## 🛠️ Key Technical Features

- **Reliability:** 100% Business logic coverage with **Jest**.
- **Persistence:** High-performance local storage via **IndexedDB API**.
- **Architecture:** Strict separation of concerns (Model-View-Controller).

## 🚀 Getting Started

Check the specific documentation for each module:

1.  **Frontend Development:** [Client Guide](./client/README.md)
2.  **Backend Development:** [Server Guide](./server/README.md)
