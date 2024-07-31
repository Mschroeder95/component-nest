# Component Nest

- This is an open source Next.js component library

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
git push
```

- Open a [pull request](https://github.com/Mschroeder95/component-nest/pulls) for the release/x.x.x branch into main
