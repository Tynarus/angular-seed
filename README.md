## Angular 4 Seed Project

A basic Angular 4 seed project utilizing the following technologies:

The purpose of this seed project is to create an Angular environment with a little less configuration clutter. All configuration files are conveniently organized within the project's **config/** directory, instead of being strewn about the project structure and/or the project root. 

This makes makes configuration files much easier to find, as well as helping keep the general project structure a lot cleaner! 

* Angular 4.3.6
* TypeScript 2.5
* Karma/Jasmine
* Codelyzer & TSLint
* SASS/SCSS
* Webpack 3

### Commands

* `npm start` - start the development webpack server (access via http://localhost:3000/)
* `npm test` - run the project unit tests (*.spec.ts files)
* `npm run coverage` - run the project unit tests one time and print out a coverage report, generated under **/coverage/index.html**
* `npm run lint` - run the project linting (will be run every time `npm test` is run)
* `npm run build` - generate a production build for the project, which will be inserted into dist/
* `npm run server` - run a live-server instance off of the **dist/** directory (generated from the `build` command)