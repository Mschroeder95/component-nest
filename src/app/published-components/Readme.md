# Installation

### Prerequisite

- A new or existing [Next.js](https://nextjs.org/docs/getting-started/installation)

### Install

- Install the component-nest package

```bash
npm install component-nest
```

- Add transpilePackages for component-nest to next.config.mjs

```js
const nextConfig = {
  transpilePackages: ["component-nest"], // add this line
};
```

- update tailwind.config.ts

```ts
import type { Config } from "tailwindcss";
import { colors } from "component-nest/colors"; // import component nest colors

colors["dark-font-color-1"] = "#80ed99"; // Override any of the colors to match your desired theme

const config: Config = {
  darkMode: "selector", // turn on dark mode selector
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/component-nest/components/**/*.{js,ts,jsx,tsx,mdx}", // add component nest to tailwind conent
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors, // extend colors
    },
  },
  plugins: [],
};
export default config;
```

<br />
<br />

# Usage

## Components

- Import tsx components and use them in your project

```jsx
// Page.jsx
import Button from "component-nest/components/client/buttons/Button";

export function Page() {
  return (
    <main>
      <Button>Click me</Button>
    </main>
  );
}
```

## Overriding CSS Classes

- Parent Element Class Override
  - This project uses twmerge and supports a className property that will override any existing tailwind css classes on the parent component
  ```json
  className="bg-blue-100"
  ```
- Nested Element CSS Override
  - Use tailwind abritrary directives
  ```json
  className="[&_#top-navbar-links]:bg-blue-100"
  ```
