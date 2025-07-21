# Song Management App

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Webpack Configuration](#webpack-configuration)
- [API Endpoints](#api-endpoints)
- [AI Usage](#ai-usage)
- [Additional Resources](#learning-resources)
- [Deployment Links](#deployment-links)

---

## Project Overview
A full-stack application that manages songs with CRUD operations.
## Tech Stack
- Frontend: ReactJS, Redux Toolkit, Redux-Saga, Emotion, Webpack
- Backend: Node.js, Express, MongoDB
## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Bethlehem-Tesfaye/Song-management-.git
cd Song-management-

# Install dependencies
npm install

# Run the development server
npm start

# Build for production
npm run build

```
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

## API Endpoints

The backend provides the following RESTful API endpoints for managing songs:

Base URL:  
https://song-management-server.onrender.com/api/songs

### Endpoints

```http
GET    /        -> Get all songs (paginated)  
POST   /        -> Create a new song  
PUT    /:id     -> Update an existing song by ID  
DELETE /:id     -> Delete a song by ID  

```

## AI Usage

I used AI tools (such as ChatGPT) to assist with various parts of this project, including:

- Writing and formatting this README
- Suggesting commit and merge message names
- Helping with modal design and styled-components style suggestions
- Formatting,including setting up the GitHub Actions linting workflow (`.yml` file)
- Leveraging AI to better understand errors and guide troubleshooting

### Important Notes on AI Usage

- I reviewed and made sure I understood the code and configurations suggested by AI before using them.


## Additional Resources

During this project, I referred to the following materials for guidance:

- [Traversy Media - webpack setup](https://www.youtube.com/watch?v=IZGNcSuwBZs&t=1295s&ab_channel=TraversyMedia)
- [Prateek Surana - Using Environment Variables with Webpack](https://prateeksurana.me/blog/using-environment-variables-with-webpack/)
- [CodeWithVishal - Redux-Saga Tutorial](https://www.youtube.com/watch?v=DPOzlL1fpnU&t=484s&ab_channel=CodeWithVishal)
- [Great Frontend - Code Splitting and Lazy Loading in React](https://www.greatfrontend.com/blog/code-splitting-and-lazy-loading-in-react)
- [PedroTech - Jest Testing Tutorial](https://www.youtube.com/watch?v=JBSUgDxICg8&t=840s&ab_channel=PedroTech)

---

## Deployment Links

- **Frontend:** [https://song-list-management-app.netlify.app/](https://song-list-management-app.netlify.app/)
- **Backend API:** [https://song-management-server.onrender.com/](https://song-management-server.onrender.com/)

