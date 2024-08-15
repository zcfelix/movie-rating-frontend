Table of Contents
=================

* [Introduction](#introduction)
* [General instruction](#general-instruction)
* [Design](#design)

## Introduction

This is a simple React app to display a list of movies and movie
details.
It uses
the [Movie backend API](https://github.com/zcfelix/moving-rating-backend)
to fetch the data.

The app is built
with [React](https://react.dev/), [Shadcn](https://ui.shadcn.com/),
and [Tailwind CSS](https://tailwindcss.com/).
The app consists of two main pages:

- Home Page: Displays a list of movies with a rating and a
  button to view the movie details.
  It supports pagination and search.
- Movie List Page: Display a tile view of movies,
  each tile has a button to rate the movie.
  It supports dynamic loading of movies.

## General instruction

- Clone the repository

```shell
git clone https://github.com/zcfelix/movie-rating-frontend.git
```

- Install the dependencies

```shell
npm install
```

- Build the app

```shell
npm run build
```

- Run tests

```shell
npm run test
```

***To run this app, you need to start the backend server first.
Please follow the instruction
*** [here](https://github.com/zcfelix/moving-rating-backend/blob/main/README.md).

- Start the frontend server

```shell
npm run dev
```

- Open the browser and navigate to `http://localhost:5173` to view the app.

## Design

- Using vite to build the project, it's faster than webpack. The hot loading is
  also faster.
- Using shadcn as the UI library, it's a simple and easy-to-use UI library.
- Using tailwindcss to style the project, it's a utility-first CSS framework.
- Using context to manage the global state, it's a simple way to manage the
  global state for a simple app.
- Using axios to fetch the data.