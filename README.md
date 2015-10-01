# cs-angular-example

*Generated with [ng-poly](https://github.com/dustinspecker/generator-ng-poly/tree/v0.10.12) version 0.10.12*

## Setup
1. Install [Node.js](http://nodejs.org/)
 - This will also install npm.
1. Run `npm install -g bower gulp yo generator-ng-poly@0.10.12`
 - This enables Bower, Gulp, and Yeoman generators to be used from command line.
1. Run `npm install` to install this project's dependencies
1. Run `bower install` to install client-side dependencies
1. Use [generator-ng-poly](https://github.com/dustinspecker/generator-ng-poly) to create additional components

## Gulp tasks
- Run `gulp build` to compile assets
- Run `gulp dev` to run the build task and setup the development environment
- Run `gulp unitTest` to run unit tests via Karma and to create code coverage reports
- Run `gulp webdriverUpdate` to download Selenium server standalone and Chrome driver for e2e testing
- Run `gulp e2eTest` to run e2e tests via Protractor
 - **A localhost must be running** - `gulp dev`

## Project Breakdown

Every front end project should be able to fill out this list of
things.

- Language: ES6 on Babel
- Framework: Angular 1.4.X
- Scaffolding Tool: NgPoly
- Unit Tests: Jasmine
- E2E Tests: Protractor
- Test Coverage: Karma Coverage
- Task Runner: Gulp
- Development Server: Node/BrowserSync
- Application Dependencies: Bower
- Development Dependencies: NPM

## What ever dev environment needs by default
- Git
- Node
- N
- NPM
- Yeoman

## Things to consider
- Which language to use? ES6, ES5, Typescript, CoffeeScript, JSX, etc.
- Most modern front end web apps are compiled
- Traditional MVC vs component driven architecture
- Business logic JS should never mingle with presentation JS logic. ( even in jQuery )
- Should it be a single page app or not?
- Collection of tiny libraries or one giant framework
