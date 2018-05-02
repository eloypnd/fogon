# Fogon

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This project was bootstrapped with [Create React App](./docs/create-react-app.md).

## Usage

In the project directory, you can run:

- `npm install`<br>
    Run this first to get all dependencies.

- `npm start`<br>
    Runs the app in the development mode.<br>
    > Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
    The page will reload if you make edits.<br>
    You will also see any lint errors in the console.

- `npm test`<br>
    Launches the test runner in the interactive watch mode.

- `npm run build`<br>
    Builds the app for production to the `build` folder.<br>

## Architecture

Boilerplate to built a [SPA](https://en.wikipedia.org/wiki/Single-page_application) based on [create-react-app](https://reactjs.org) and [redux](https://redux.js.org).

- [ReactJS](https://reactjs.org) for the view layer
- [Redux](https://redux.js.org/) to manage the state.
- [ducks](https://github.com/erikras/ducks-modular-redux/) to organise actions, reducers, side-effects, etc.
- I'll keep it simple for this exercise and use [redux-thunk](https://github.com/gaearon/redux-thunk) for side-effects.<br>
    There are more sophisticated options like [redux-observable](https://redux-observable.js.org) or [redux-saga](https://redux-saga.js.org).
