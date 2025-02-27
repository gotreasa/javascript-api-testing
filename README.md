# API Testing in JavaScript

This repository is useful for teams that need to test their APIs and they would prefer to do it in JavaScript.

## What's provided?

- A Gherkin framework to write Jest tests that are able to test the API

### Additional items

- Commit lint - enures the commit messages follow the commit linting rules, deinfed in https://github.com/conventional-changelog/commitlint/#what-is-commitlin
- ESLint & Prettier - ensure that your code follows a standard format and can be easily fixed by running

```
npm run lint:fix
npm run prettier:fix
```

- Husky for Git hooks, to ensure all the checks and balances are run during the git steps
- Jest - your testing library
- Lint-staged - runs linting defined in .lintstagedrc file

## Getting started

To start working with this repository, you will need to have Node installed. The version of node expected is in the .nvmrc file, as well as defined in the engine value in the package.json file. If you're using an external library such as Artifactory for your npm packages, you will need to login appropriately.

Once you are set up, you will be able to run:

```sh
npm install
```

to install everything. Once that is completed, you can run

```sh
npm test
```

to verify that everything is working correctly.
