# Ghibli App

Angular web application that list all the studio Ghibli films and his basic information.

The challenge was a web page that displays the movies and a search component with autocomplete.

The application was made entirely in Angular framework and using Angular material to keep the stack, as Angular is component based it is easier to provide scalability in the project by creating new components with only a few commands in the CLI, also the final bundle size is less than **700kb** so even in a slowly connection it will work fast.

The app is hosted in netflify and use his continous deployment when connected to Github, you only have to push into master to deploy into prod.

## Features

- Filter films by name
- Full responsive in mobile and desktop

## Technologies

- Angular version 10.0.7
- Angular material version 10.1.0

## Trade-off

As the project is using the netlify free tier it takes some time to respond if the page was innactive for a long time.

With extra time I will probably add some filters like sort by date or score.

## Installation

- clone the repository
- go to the root directory
- run in your terminal `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## The best piece of code

[This](https://github.com/DYEWolf/ghibli-app/blob/master/src/app/app.component.ts#L24-L30) is my best code in the project, one of the best things of javascript is that you can write a whole filter function with only a few lines of code and without external libraries.

## Live demo

To see the live demo [click here](https://ecstatic-snyder-5485cf.netlify.app/)
