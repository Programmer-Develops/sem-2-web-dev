# ReactJS 😎 : Notes and Assignment Answers

---

## Day 1: Introduction to React

### Assignment 1

# React.js — Basics

---

## 1. What is React?

React is an **open-source JavaScript library** used for building fast, interactive, and dynamic **User Interfaces (UIs)** — especially for Single Page Applications (SPAs).

Instead of reloading the whole page on every change, React updates only the parts of the UI that actually changed, making apps feel snappy and smooth.

Key characteristics of React:

- **Component-Based** — UI is broken into small, reusable pieces called components
- **Declarative** — You describe *what* the UI should look like, React figures out *how* to update it
- **Virtual DOM** — React keeps a lightweight copy of the real DOM in memory and only applies the minimum necessary changes
- **Unidirectional Data Flow** — Data flows from parent to child via props, making the app predictable and easy to debug

```jsx
// A simple React component
function Hello() {
  return <h1>Hello, World! 👋</h1>;
}
```

---

## 2. Who Made React?

React was created by **Jordan Walke**, a software engineer at **Meta (Facebook)**. It was first deployed on Facebook's News Feed in **2011** and later on Instagram in **2012**.

React was **open-sourced at JSConf US in May 2013** and has since grown into one of the most popular frontend libraries in the world, maintained by Meta and a large open-source community.

| Timeline | Event |
|----------|-------|
| 2011 | First used internally at Facebook |
| 2012 | Deployed on Instagram |
| 2013 | Open-sourced at JSConf US |
| 2015 | React Native released |
| 2022 | React 18 released |

---

## 3. What is Babel?

**Babel** is a JavaScript **transpiler** (source-to-source compiler). It converts modern JavaScript (ES6+) and JSX code into older JavaScript that all browsers can understand.

Without Babel, browsers would throw errors when they encounter JSX like `<h1>Hello</h1>` inside JavaScript, because that is not valid JS syntax natively.

Babel's main jobs in a React project:

- Converts **JSX → `React.createElement()` calls**
- Converts **ES6+ (arrow functions, classes, modules) → ES5** for older browser support
- Allows developers to write modern, clean code without worrying about browser compatibility

```
JSX Code  ──►  Babel  ──►  Valid JavaScript  ──►  Browser
```

> You can try Babel live at: [https://babeljs.io/repl](https://babeljs.io/repl)

---

## 4. How Does Babel Convert HTML Code in React (JSX) into Valid Code?

Babel converts JSX into `React.createElement()` function calls. The browser does not understand JSX — it only understands plain JavaScript. Babel acts as a translator.

**Before (JSX — what you write):**

```jsx
const element = <h1 className="title">Hello, React!</h1>;
```

**After (what Babel compiles it to):**

```js
const element = React.createElement(
  "h1",
  { className: "title" },
  "Hello, React!"
);
```

**A more complex example:**

```jsx
// JSX you write
const App = () => (
  <div id="container">
    <h1>Welcome</h1>
    <p>This is React</p>
  </div>
);
```

```js
// What Babel produces
const App = () =>
  React.createElement(
    "div",
    { id: "container" },
    React.createElement("h1", null, "Welcome"),
    React.createElement("p", null, "This is React")
  );
```

So JSX is just **syntactic sugar** — a friendlier way to write `React.createElement()` calls. Babel handles the translation automatically during the build process.

---

## 5. What is ReactDOM Used For? (With Example)

**ReactDOM** is a package that provides methods to render React components into the actual **browser DOM**. It is the bridge between React's virtual world and what the user actually sees on screen.

React handles the *logic and structure* of UI, while ReactDOM handles *putting it on the page*.

**Main method:**

```js
ReactDOM.createRoot(domNode).render(<App />);
```

**Full Example:**

```html
<!-- index.html -->
<body>
  <div id="root"></div>
</body>
```

```jsx
// index.js / main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello from ReactDOM! 🚀</h1>
      <p>React is rendering this into the #root div.</p>
    </div>
  );
}

// Step 1: Find the root DOM node
const rootElement = document.getElementById("root");

// Step 2: Create a React root
const root = ReactDOM.createRoot(rootElement);

// Step 3: Render your App component into it
root.render(<App />);
```

Without `ReactDOM`, React components would exist only in memory — `ReactDOM` is what puts them on the screen.

---

## 6. What Packages Do You Need to Import to Work with React?

There are two core packages required to work with React in the browser:

### Package 1: `react`

The core library. It provides `React.createElement`, hooks (`useState`, `useEffect`), component logic, and the virtual DOM.

```bash
npm install react
```

```js
import React from "react";
```

### Package 2: `react-dom`

The rendering layer for web browsers. It provides `ReactDOM.createRoot()` and `render()` to mount React into the real DOM.

```bash
npm install react-dom
```

```js
import ReactDOM from "react-dom/client";
```

### Summary Table

| Package | Purpose | Import |
|---------|---------|--------|
| `react` | Core library — components, JSX, hooks | `import React from 'react'` |
| `react-dom` | Renders React into the browser DOM | `import ReactDOM from 'react-dom/client'` |

> In React 17+, you no longer need to explicitly import React in every file for JSX — but it's still needed where you use hooks or `React.createElement` directly.

---

## 7. How Do You Add React to a Web Application?

There are two main ways to add React to a web application:

---

### Method 1: Using Vite (Recommended for New Projects)

```bash
# Create a new React + Vite project
npm create vite@latest my-app -- --template react

# Navigate into the project
cd my-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

### Method 2: Adding React via CDN (Quick Prototype / Existing HTML Page)

Add these three scripts to your HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React via CDN</title>
  </head>
  <body>
    <div id="root"></div>

    <!-- Step 1: Load React core -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>

    <!-- Step 2: Load ReactDOM -->
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Step 3: Load Babel to use JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <!-- Step 4: Write your React code -->
    <script type="text/babel">
      function App() {
        return <h1>React is working! 🎉</h1>;
      }
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);
    </script>
  </body>
</html>
```

> The CDN approach is great for quick demos but **not recommended for production**. Use Vite or Create React App for real projects.

---

## 8. What is `React.createElement`?

`React.createElement` is the **core function** that React uses to create elements (the building blocks of a React app). Every piece of UI in React is ultimately created using this function.

When you write JSX, Babel compiles it into `React.createElement()` calls behind the scenes.

**Syntax:**

```js
React.createElement(type, props, ...children)
```

**Example:**

```js
// This:
const element = React.createElement("h1", { className: "title" }, "Hello!");

// Is exactly the same as writing this JSX:
const element = <h1 className="title">Hello!</h1>;
```

`React.createElement` returns a plain JavaScript **object** (called a React element) that describes what should be rendered:

```js
{
  type: "h1",
  props: {
    className: "title",
    children: "Hello!"
  }
}
```

React reads this object and uses it to build the Virtual DOM.

---

## 9. What Are the Three Properties that `createElement` Accepts?

`React.createElement` accepts **three arguments**:

```js
React.createElement(type, props, children)
```

---

### Property 1: `type` (required)

The type of element to create. It can be:
- A **string** for HTML elements: `"div"`, `"h1"`, `"p"`, `"button"`
- A **React component**: `App`, `Header`, `MyButton`

```js
React.createElement("div", ...)       // HTML element
React.createElement(MyComponent, ...) // React component
```

---

### Property 2: `props` (can be `null`)

An **object** containing the attributes/properties to pass to the element — like `id`, `className`, `style`, `onClick`, etc. Pass `null` if there are no props.

```js
React.createElement("button", { className: "btn", onClick: handleClick }, ...)
React.createElement("h1", null, ...)  // no props
```

---

### Property 3: `children` (optional)

The **content** inside the element. This can be:
- A plain **string** of text
- Another `React.createElement()` call (nested elements)
- Multiple children passed as additional arguments

```js
// Text child
React.createElement("h1", null, "Hello World")

// Nested element children
React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Title"),
  React.createElement("p", null, "Paragraph")
)
```

---

### Full Example Combining All Three:

```js
React.createElement(
  "div",                // type
  { id: "container" }, // props
  "Hello, React!"       // children
);

// Equivalent JSX:
// <div id="container">Hello, React!</div>
```

---

## 10. What is the Meaning of `render` and `root`?

### `root`

`root` refers to the **mounting point** — the DOM node where your entire React application will live. It is created by calling `ReactDOM.createRoot()` and passing it a real DOM element (usually `<div id="root">` from `index.html`).

```js
// "root" is the React root container
const root = ReactDOM.createRoot(document.getElementById("root"));
```

Think of `root` as the **entry gate** — once created, you use it to tell React where to paint your app.

---

### `render`

`render` is the **method called on the root** that actually displays your React component tree on the screen. It takes a React element or component and injects it into the DOM node specified by `root`.

```js
root.render(<App />);
```

Think of `render` as pressing the **"paint" button** — it takes your React component and puts it on the page.

---

### Together — Full Example:

```html
<!-- index.html -->
<div id="root"></div>
```

```jsx
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>My React App 🚀</h1>;
}

// 1. Find the DOM node
const domNode = document.getElementById("root");

// 2. Create the React root (the mounting point)
const root = ReactDOM.createRoot(domNode);

// 3. Render — paint the App component into the root
root.render(<App />);
```

### Visual Flow:

```
index.html                    React
────────────────────          ──────────────────────────────────
<div id="root">     ◄──────   ReactDOM.createRoot()  →  root
</div>                        root.render(<App />)

                              Result: <App /> appears inside #root
```

| Term | What it means |
|------|--------------|
| `root` | The React container tied to a real DOM node (`#root`) |
| `render` | The method that paints your React component into that container |

---

## Quick Reference Summary

| # | Topic | One-line Summary |
|---|-------|-----------------|
| 1 | React | JS library for building fast, component-based UIs |
| 2 | Creator | Jordan Walke at Meta (Facebook), open-sourced 2013 |
| 3 | Babel | Transpiler that converts JSX and modern JS into browser-compatible code |
| 4 | Babel conversion | JSX → `React.createElement()` calls automatically |
| 5 | ReactDOM | Renders React components into the real browser DOM |
| 6 | Required packages | `react` (core) + `react-dom` (rendering) |
| 7 | Adding React | Via Vite/CRA for projects, or CDN for quick demos |
| 8 | `React.createElement` | Core function that creates React elements (what JSX compiles to) |
| 9 | 3 properties | `type` (tag/component), `props` (attributes), `children` (content) |
| 10 | render & root | `root` = mounting point; `render` = paints component into root |

**Q1. What is the purpose of `package.json` in a React project?**

`package.json` is the configuration file for a Node.js/React project. It stores metadata about the project (name, version, description), lists all dependencies (libraries the project needs to run) and devDependencies (tools needed only during development), and defines scripts (like `start`, `build`, `test`) that can be run via `npm run <script>`. It also specifies the Node.js version compatibility.

**Q2. What does `npm install` do when you clone a React project?**

When you clone a React project and run `npm install`, it reads the `package.json` file and downloads all the listed dependencies and devDependencies from the npm registry into a `node_modules` folder. It also generates or updates `package-lock.json` to lock the exact versions of every installed package, ensuring consistent installs across different environments.

**Q3. What is ReactDOM?**

`ReactDOM` is the package that serves as the bridge between React's virtual DOM and the actual browser DOM. It provides the `render()` method (or `createRoot()` in React 18+) that takes a React component tree and renders it into a real DOM node in the HTML page. In short, React describes *what* the UI should look like, and ReactDOM *puts it* on the screen.

**Q4. What is the purpose of `index.html` in a React app?**

`index.html` in the `public` folder is the single HTML page that the browser loads. It contains a `<div id="root"></div>` element which acts as the mounting point for the entire React application. React injects its component tree into this `div`. It is the only HTML file in a Single Page Application (SPA).

**Q5. What does the `public` folder contain and why is it important?**

The `public` folder contains static assets that are not processed by Webpack/Vite — they are served as-is. This includes `index.html` (the app shell), `favicon.ico`, images, fonts, and other static files. It is important because files here are publicly accessible and are referenced by their direct URL path, unlike files in `src` which go through the bundler.

**Q6. How does React update the DOM efficiently?**

React uses a **Virtual DOM** — a lightweight in-memory representation of the real DOM. When state or props change, React creates a new virtual DOM tree and compares it with the previous one using a process called **reconciliation** (diffing algorithm). Only the parts that actually changed are updated in the real DOM, rather than re-rendering everything. This minimizes expensive DOM operations and makes updates fast and efficient.

**Q7. What is the role of `node_modules` in a React project?**

`node_modules` is the directory where npm installs all the packages and their dependencies listed in `package.json`. It contains the actual code of every library your project depends on. This folder is never committed to version control (it's in `.gitignore`) because it can be recreated at any time by running `npm install`.

**Q8. What is the significance of `index.js` or `main.jsx` in a React app?**

`index.js` / `main.jsx` is the **entry point** of the React application. It imports React, ReactDOM, and the root component (`App`), then mounts the entire component tree to the DOM element with `id="root"` in `index.html`. Vite and Webpack both start bundling from this file.

---

## Day 2: How to Create React Elements in JSX vs Vanilla

### Task 1

Create a React element using `React.createElement`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "title" },
  "Hello, React! 🎉"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

**Output:** Renders `<h1 id="title">Hello, React! 🎉</h1>` to the page.

---

### Task 2

Create the same element using JSX:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1 id="title">Hello, React! 🎉</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

**Note:** JSX is syntactic sugar over `React.createElement`. Both produce the same output, but JSX is far more readable.

---

### Task 3

What will be the output of the following code?

```jsx
const App = () => {
  const name = "React";
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
};
```

**Answer:** The output will be:

```
Hello, React!
```

The `{name}` is a JSX expression that evaluates the JavaScript variable `name` (which holds the string `"React"`) and injects it into the rendered output.

---

### Exercise

To learn more about how Babel compiles JSX, you can visit:
[https://babeljs.io/repl](https://babeljs.io/repl)

Paste your JSX in the left panel and see the compiled `React.createElement` calls on the right.

---

> **Note:** You can also see the React DevTools in your browser's developer console to inspect the component tree.

---

## Day 3: Props, Source React, Greeter, React App in VS Code

### Installation on Mac:

```bash
sudo npm install -g create-react-app
```

### Installation on Center:

```bash
npm install -g create-react-app
```

---

## Day 4: Components, Props, Rendering, Module CSS

### Assignment Portfolio Card

Build a **Portfolio Card** component using React that displays:

```jsx
import React from "react";
import styles from "./PortfolioCard.module.css";

const PortfolioCard = ({ name, role, avatar, skills }) => {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={name} className={styles.avatar} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.role}>{role}</p>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.skillBadge}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
```

**`PortfolioCard.module.css`:**

```css
.card {
  width: 300px;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  background: #fff;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  font-size: 1.4rem;
  margin: 12px 0 4px;
}

.role {
  color: #666;
  margin-bottom: 12px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.skillBadge {
  background: #e0f2fe;
  color: #0369a1;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}
```

**Usage in `App.jsx`:**

```jsx
<PortfolioCard
  name="John Doe"
  role="Frontend Developer"
  avatar="https://i.pravatar.cc/150"
  skills={["React", "JavaScript", "CSS"]}
/>
```

---

## Day 5: Tailwind CSS

### What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework** that provides low-level utility classes (like `flex`, `pt-4`, `text-center`, `bg-blue-500`) directly in your HTML/JSX, allowing you to build custom designs without writing custom CSS. Instead of writing `.btn { ... }`, you compose styles directly with classes like `className="px-4 py-2 bg-blue-500 text-white rounded"`.

Key benefits:
- No context switching between HTML and CSS files
- Smaller production CSS (purges unused styles)
- Highly customizable via `tailwind.config.js`
- Works great as a Vite plugin in React projects

---

### Method 1: Installing Tailwind CSS as a Vite Plugin

#### 1. Create your plugin:

```bash
npm create vite@latest my-app -- --template react
cd my-app
```

#### 2. Install Tailwind CSS:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

#### 3. Configure the Vite plugin:

In `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

#### 4. Import Tailwind CSS:

In your `src/index.css`:

```css
@import "tailwindcss";
```

#### 5. Start your dev process:

```bash
npm run dev
```

---

### Method 2: Using Tailwind CSS with CDN (Quick Demo)

Add to your `index.html` `<head>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

> ⚠️ The CDN method is for **prototyping only** and is not recommended for production.

---

### Final Project in React + Tailwind

```jsx
// src/App.jsx
import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
        <img
          src="https://i.pravatar.cc/100"
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
        <p className="text-gray-500 mt-1">Frontend Developer</p>
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {["React", "Tailwind", "JavaScript"].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
```

---

## Useful Links

- React Docs: [https://react.dev](https://react.dev)
- Tailwind CSS Docs: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- Babel REPL: [https://babeljs.io/repl](https://babeljs.io/repl)
- Vite Docs: [https://vitejs.dev](https://vitejs.dev)