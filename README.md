# Song Management App

## table of contents
- [Project overview](#project-overview)
- [Tech stack](#tech-stack)
- [Set up instruction](#setup-instruction)
- [Webpack configuration](#webpack-configuration)
- [Api endpoint](#api-endpoints)
- [AI usage](#ai-usage)
- [Deployment links](#deployment-links)

---

## Project overview
A full-stack application that manges songs with CRUD
## Tech stack
- Frontend: ReactJS, Redux Toolkit, Redux-Saga, Emotion, Webpack
- Backend: Node.js, Express, MongoDB
## Set up instruction

## Webpack configuration

The project is manually set up with Webpack for full control over the build process. Below are the detailed steps followed to configure it:

---

### 1. Project Structure

The `client/` folder contains a modular file structure. It includes the `public/index.html` file, which has the `<div id="root"></div>` element where the React application is mounted.

---

###  2. Initialize Project

```bash
npm init -y
```

Generates a `package.json` file to manage dependencies and scripts.

---

###  3. Install Core Webpack Packages

```bash
npm i webpack webpack-dev-server html-webpack-plugin --save-dev
```

These packages are essential for:
- Bundling JS and assets (`webpack`)
- Live-reloading during development (`webpack-dev-server`)
- Injecting scripts into `index.html` (`html-webpack-plugin`)

---

###  4. Install Webpack CLI

```bash
npm i webpack-cli --save-dev
```

Allows using Webpack via `npm run` scripts.

---

###  5. Create Basic Webpack Configuration

Created a `webpack.config.js` file with:

- Entry point: `./src/main.jsx`
- Output directory: `dist/`
- HTML template: `HtmlWebpackPlugin` to inject the app bundle

---

###  6. Add NPM Scripts

In the `package.json`, add:

```json
"scripts": {
  "build": "webpack --mode production",
  "start": "webpack serve --mode development --open"
}
```

- `build`: Creates an optimized production bundle.
- `start`: Starts the dev server with hot reload.

---

###  7. Configure Babel for JSX & ES6+

```bash
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

Then create a `.babelrc` file:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Enables transpiling JSX and modern JavaScript syntax.

---

###  9. Configure Image Assets Handling

Updated `webpack.config.js` to include:

```js
{
  test: /\.(png|jpe?g|gif|svg)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'images/[name][hash][ext]'
  }
}
```

This allows importing images directly in React.

---

###  10. Add Environment Variables Support

```bash
npm i dotenv-webpack --save-dev
```

Then add to `webpack.config.js`:

```js
const Dotenv = require('dotenv-webpack');

plugins: [
  new HtmlWebpackPlugin({ template: './public/index.html' }),
  new Dotenv()
]
```

Reads environment variables from a `.env` file during the build.

---

###  11. Install React & ReactDOM

```bash
npm i react react-dom
```

Essential libraries to build and render the React application.

---

###  12. Initialize App in `main.jsx`

Used React `createRoot` API which mounts the app inside the `<div id="root"></div>` defined in `index.html`.

---

## Api endpoint

## AI usage

## Deployment links
