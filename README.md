# Javascript Coding Challenges

## Getting Started

* run: ` docker-compose up `
  * web container will be served at <docker machine ip>:8000
  * chrome standalone will be available
  * e2e container is available to run any tests with one of the following commands:
    * unit tests: ` docker-compose run e2e gulp test `
    * mocha tests: ` docker-compose run e2e gulp mocha `
    * jasmine tests: ` docker-compose run e2e gulp spec `
    * protractor tests: ` docker-compose run e2e gulp e2e `


## Resources

* generated skeleton angular 1.5 app with [Gulp Angular](https://github.com/Swiip/generator-gulp-angular)
