# Installation

### Prerequisite

- A new or existing [Next.js](https://nextjs.org/docs/getting-started/installation)

### Install

- Install the component-nest package

```bash
npm install component-nest
```

<br />
<br />

# Usage

## Components

- Import components and use them in your project

```jsx
// Page.jsx
import { Button } from "component-nest";

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
