# 🚀 Playwright Hybrid Test Automation Framework

A **robust**, **scalable**, and **modular** hybrid automation framework built using `Playwright` and `TypeScript`.  
Designed for both **UI and API automation**, it follows industry best practices with a clean architecture, reusable components, and flexible test execution.  

---

## 🔑 Key Features  

- Built with **Playwright + TypeScript** using the **Page Object Model (POM)**  
- **Hybrid framework** → supports both **UI + API automation**  
- **Auth setup** implemented to avoid repetitive logins  
- **Projects defined** for UI and API → run independently or together  
- **Project dependency chaining** → one command runs everything needed  
- **API + UI in a single test file** (API creates test data, UI validates it)  
- **Common utilities and test data** for both UI & API (if shared)  
- Clean, modular **folder structure** with standard naming conventions  
- Supports **parallel execution** across multiple browsers/devices  
- Auto-captures **screenshots, videos, and traces** on failure  
- **Tag-based execution**: `@smoke`, `@functional`, `@regression`  
- Pre-defined **npm commands** for quick and easy test runs  
- **Cross-browser ready** → `Chromium` by default, configurable for `Firefox`/`WebKit`  

---

## 📁 Folder Structure Overview  

The project is organized for **modularity, scalability, and maintainability**, following best practices for hybrid frameworks.  

```bash
playwright-hybrid-framework/
├── playwright-report/             # HTML/Allure reports
├── test-results/                  # Playwright artifacts
├── storage/                       # Auth/session storage
├── src/
│   ├── api/                       # API utilities & base classes
│   │   ├── apis/                  # API request definitions
│   │   ├── common/                # Constants, endpoints, headers, messages
│   │   └── baseApi.ts
│   │
│   ├── ui/                        # UI utilities & Page Objects
│   │   ├── pages/                 # POM structure
│   │   ├── utils/                 # UI helpers, fileUtils, testData
│   │   └── basePage.ts
│   │
│   └── fixtures.ts                # Global fixtures for API + UI
│
├── tests/
│   ├── api-tests/                 # API test cases
│   │   ├── users-crud.spec.ts
│   │   └── users-chaining.spec.ts
│   │
│   ├── ui-tests/                  # UI test cases
│   │   ├── login.spec.ts
│   │   ├── dropdown.spec.ts
│   │   └── file-upload.spec.ts
│   │
│   └── auth.setup.ts              # Login/auth setup
│
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

---

## ⚙️ Configuration Highlights  

- **Auth dependency** → login runs once, reused across dependent tests  
- **Projects** → run UI tests, API tests, or both together  
- **baseURL** configured for easy navigation  
- **Screenshots, videos, and traces** auto-saved on failure  
- **Cross-browser testing** supported out-of-the-box  

---

## 📦 Available NPM Scripts  

| Command                    | Description                                         |
|----------------------------|-----------------------------------------------------|
| `npm run test`             | Run **all tests** (UI + API) in headless mode       |
| `npm run test:ui`          | Run only **UI tests**                               |
| `npm run test:api`         | Run only **API tests**                              |
| `npm run test:headed`      | Run tests in **headed** mode (visible browser)      |
| `npm run test:smoke`       | Run tests tagged with `@smoke`                      |
| `npm run test:regression`  | Run tests tagged with `@regression`                 |
| `npm run test:debug`       | Run tests in **debug mode** with inspector + trace  |
| `npm run test:report`      | HTML report will open in browser                    |

---

## 🧭 Coding Best Practices Followed  

- `expect()` used **only inside test files**, never in Page Objects  
- **No duplication** → reusable base classes and utilities  
- **Consistent naming & formatting**  
- **Modular design** for scaling with large test suites  
- `.gitignore` pre-configured to avoid sensitive data leaks  

---

## 📊 Test Reports  

- **HTML reports** auto-generated under `/playwright-report`  
- **Screenshots & videos** captured on failure  
- **Trace viewer** available for debugging step by step  

---

## 🌐 Demo Website  

All UI tests are validated against my custom site:  

🔗 **RapidTest** – [https://markadvk.github.io/rapidtest/](https://markadvk.github.io/rapidtest/)  

Includes:  
- Login flows  
- Dropdowns (static/dynamic)  
- File uploads (drag & drop supported)  

---

## 🤝 What I Offer Clients  

- Build **hybrid Playwright UI + API automation frameworks** from scratch  
- Convert existing **manual test cases** into automated suites  
- Integrate **CI/CD pipelines** (GitHub Actions, Jenkins, GitLab)  
- Maintain, refactor, and **expand automation coverage**  
- Provide **professional reports & dashboards** for stakeholders  
- Deliver **production-ready, enterprise-grade automation**  

---

## ✅ Conclusion  

This Playwright Hybrid Framework is **production-ready**, **scalable**, and **future-proof**.  
It’s ideal for clients who want **UI + API automation combined** with clean design and reporting.  

📬 Let’s bring **speed, quality, and reliability** to your testing process!  
