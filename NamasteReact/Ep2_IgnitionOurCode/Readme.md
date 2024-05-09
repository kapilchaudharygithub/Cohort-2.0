
---

# Lecture-2: Inception Our Code

_In this lecture, we delve into essential tools and processes crucial for initializing and managing React projects._

## Topics Covered

1. [**NPM (npmjs.com)**](#npm-npmjscom): Managing packages and dependencies.
2. [**npm init**](#npm-init-): Initializing npm packages.
3. [**Package.json**](#what-is-packagejson): Configuration and dependency tracking for npm.
4. [**Package/Dependencies**](#packagedependencies): Understanding dev and normal dependencies.
5. [**Package versions**](#package-versions): Managing package versions.
6. [**Bundler**](#bundler): Overview of bundling dependencies.
7. [**Common Bundlers**](#common-bundlers): Introduction to popular bundlers.
8. [**Parcel**](#parcel): Installation and usage of Parcel bundler.
9. [**Package-lock.json**](#package-lockjson): Tracking exact versions of dependencies.
10. [**node-modules**](#node-modules): Understanding the node modules directory.
11. [**parceljs.org**](#parceljsorg): Features and benefits of Parcel bundler.
12. [**.gitignore**](#gitignore): Ignoring files for git repository.
13. [**Igniting our App**](#igniting-our-app): Setting up the development server.
14. [**Installing React, ReactDOM**](#installing-react-reactdom): Installing React and ReactDOM packages.
15. [**importing React and ReactDOM**](#importing-react-and-reactdom): Importing React and ReactDOM into the project.
16. [**start server**](#start-server): Starting the development server.
17. [**Building Production Bundle**](#building-production-bundle): Creating a production build.
18. [**BrowserList**](#browserlist): Configuring browser support.
19. [**Changing command to run local server**](#changing-command-to-run-local-server): Updating scripts in package.json.

---

### NPM (npmjs.com)

- **Purpose**: Manage packages and dependencies.
- **Features**:
  - Standard library for all packages.
  - Largest package manager.
  - Access to a wide range of packages for various purposes.

---

### npm init ↩

- **Usage**: Initialize npm package with project details.
- **Creates**: Generates a new file named _package.json_.

---

### What is Package.json

- **Definition**: Configuration file for npm projects.
- **Functions**:
  - Manages dependencies.
  - Manages scripts.
  - Stores project details such as name, version, author, and more.

---

### Package/Dependencies

- **Types**:
  - **dev dependency**: Used in development phase only.
  - **normal dependency**: Used in production.

---

### Package versions

- **Identification**:
  - View version details in package.json.
  - Symbols indicate update types: ^ (Caret), ~ (Tilde), or no symbol for exact version.

---

### Bundler

- **Purpose**: Bundles and packages application code together for production.
- **Features**: Minification, caching, cleaning, and more.

---

### Common Bundlers

- **Popular Options**: webpack, parcel, vite, and more.
- **Usage**: Each has its own strengths and use cases.

---

### Parcel

```bash
# Install Parcel
npm i -D parcel
```

```bash
npx parcel index.html (source file)
```

---

### Package-lock.json

- **Function**: Tracks exact versions of dependencies.
- **Benefits**: Ensures consistency across different machines and prevents unwanted updates.

---

### node-modules

- **Definition**: Directory containing all code fetched from npm.
- **Contains**: Transitive dependencies and their respective package.json files.

---

### parceljs.org

- **Features**: Comprehensive bundling capabilities including caching, error handling, code splitting, and more.
- **Benefits**: Improves development and production workflows.

---

### .gitignore

- **Purpose**: Ignore files not meant for version control.
- **Commonly Ignored**: node_modules, dist, .parcel-cache, and more.

---

### Igniting our App

```bash
npx parcel index.html (src file)
```

- npx executes package.
- Parcel builds a development build for our app and hosts it on localhost.

---

### Installing React, ReactDOM

```bash
# Install all dependencies
npm install
```

```javascript
npm i react
npm i react-dom
```

---

### Importing React and ReactDOM

- Face error without importing.
- Browser scripts can't have import/export.

```javascript
import React from "react"
import ReactDOM from "react-dom/client"
```

---

### Start Server

```bash
npx parcel index.html
```

---

### Building Production Bundle

- Takes more time in executing.

```bash
npx parcel build index.html
```

- Create _dist_ folder with minified/compressed files.

---

### BrowserList

- Define supported browser versions.

```json
"browserList":[
  "last 2 versions",
  "last 2 chrome versions"
]
```

---

### Changing command to run local server

- Update scripts in _package.json_.

```json
"scripts":[
  "start": "parcel index.html",  // dev version
  "build": "parcel build index.html"  // production version
]
```

- npm run start/npm start.
- npm run build.

This README provides a comprehensive overview of essential tools and processes covered in Lecture 2 of Namaste React. Understanding these concepts is crucial for effectively managing and developing React projects.