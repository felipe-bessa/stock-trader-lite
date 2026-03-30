# 💻 StockTrader Lite Client (GUI)

> High-reliability frontend built with **Vanilla JS**, **MVC** architecture, and **TDD**.

[ [&#x1F1E7;&#x1F1F7;] leia a versão em Português aqui](./README.pt-br.md)

## 🎯 Overview

This is the core of the StockTrader Lite interface. It manages trade records (Stock, Quantity, and Value) directly in the browser, ensuring data integrity through strict business rules and automated testing.

## 🛠️ Development Roadmap

- [✅] **Infrastructure & Setup**
  - [✅] Jest configuration for ES6 Modules.

## 🏗️ Internal Structure

The project follows a clean separation of concerns within the `/app` directory:

- **`index.html`**: Application entry point.
- **`/css`**: Global styles and layout definitions.
- **`/app`**: Logic core (Model-View-Controller).
- **`/tests`**: Jest test suites for the TDD workflow.

## 🧪 TDD Workflow

Code quality was prioritized by writing tests before implementation (**Red-Green-Refactor**).

### Running Tests

Inside the `client` folder, use:

```bash
# Run all tests
npm test

# Run tests in watch mode (Recommended for development)
npm run test:watch
```

## 💾 Local Persistence

Data is stored using the **IndexedDB API**, providing a robust NoSQL storage solution that keeps trade records safe even after closing the browser, without needing a backend at this stage.

## 🛠️ Technology Stack

- **Language:** JavaScript (ES6+ Modules)
- **Architecture:** MVC (Model-View-Controller)
- **Persistence:** IndexedDB (Native Browser API)
- **Testing:** Jest (TDD)
- **Styling:** CSS3 (Flexbox/Grid)
