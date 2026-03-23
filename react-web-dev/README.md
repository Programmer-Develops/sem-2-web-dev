# ReactJS 😎 : Notes and Assignment Answers

---

## Day 1: Introduction to React

### Assignment 1

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