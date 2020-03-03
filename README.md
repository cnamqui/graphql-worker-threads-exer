## worker threads + graphql exercise
I haven't had the time to make a docker file yet so I'm not able to deploy
You should, however be able to run this locally by running:
```
   $ npm i
   $ npm run start:dev
```
then visit `http://localhost:3000/graphql` for the GUI and Docs

## Linting
using ESLint in favor of TSLint due to the deprecation of the latter (https://github.com/palantir/tslint/issues/4534)
using prettier plugin for eslint as well

## Issues
the RDAP service will sometimes time out and/or exit with a non-zero code.