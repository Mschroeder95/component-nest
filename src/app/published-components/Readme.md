# Usage

## Overriding Classes

- Parent Element CSS Override
  - This project uses twmerge and supports a className property that will override any existing tailwind css classes on the parent component
- Nested Element CSS Override
  - Use tailwind abritrary directives
  ```json
  className="[&_#top-navbar-links]:bg-blue-100"
  ```
