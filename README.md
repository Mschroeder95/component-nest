# Component Nest

- This is an open source Next.js component library [published on npm](https://www.npmjs.com/package/component-nest?activeTab=readme)
  <br />
  <br />
  <br />

# Usage

- Review the npm package [component-nest](https://www.npmjs.com/package/component-nest?activeTab=readme)

## Installation

- Have an already existing or create new [Next.js](https://nextjs.org/) project
- Install the the [component-nest](https://www.npmjs.com/package/component-nest?activeTab=readme) dependency by running:

```bash
npm install component-nest
```

<br />
<br />
<br />

# Contribution

## Adding new components

- Create new components in the [src/app/published-components](/src/app/published-components/) directory.
- Until we have a better solution add an example of your new component to the [/src/app/docs/docs-page-data.tsx](/src/app/docs/docs-page-data.tsx) file and it will be automatically displayed on the documentation page of the website.
- export your component its appropriate index.ts so it can be exported at the top level module [src/app/published-components/index.ts](src/app/published-components/index.ts)
- Open a pull request and after your code merges it will be included in the next release.

## Releasing New Components

### Releasing to NPM registry

- create a release branch off of main
- from the root directory run:

```bash
git checkout main
git checkout -b release/x.x.x
```

- Make sure to bump the package verion in [src/app/published-components/package.json](src/app/published-components/package.json)
- from the root directory run:

```bash
git add .
git commit -m "version bump"
git push --set-upstream origin release/x.x.x
```

- Open a [pull request](https://github.com/Mschroeder95/component-nest/pulls) for the release/x.x.x branch into main
