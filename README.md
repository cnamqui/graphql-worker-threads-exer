## worker threads + graphql exercise
I haven't had the time to make a docker file yet so I'm not able to deploy
You should, however be able to run this locally by running:
```
   $ npm i
   $ npm run start:dev
```
then visit `http://localhost:3000/graphql` for the GUI and Docs

## Linting
using ESLint in favor of TSLint due to the deprecation of the latter [(see here)](https://github.com/palantir/tslint/issues/4534)
using prettier plugin for eslint as well
 

## Worker Threads (updated)
Previously, the built-in node module "worker_threads" has been used to separate each service into their own threads as part of the requirements for this exercise. 

However it has been moved to http service requests and a standalone server will be used to mimic a microservices environment which this GraphQL server will be querying. Please see [graphql-subworkers-exer](https://github.com/cnamqui/graphql-subworkers-exer)
 