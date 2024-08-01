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

## Deployment

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
