import React from "react"
import ReactDOM from "react-dom"
import MoviesList from "./components/MoviesList"
// Movies list - App
// Initialize a Movies class which:

// Keeps an array of movies in state

// has a form element which includes an input field to add a movie to the array

// re: submit button - Make sure to preventDefault(event) to stop the page re-loading/submitting

// Renders the list of movies to the screen.

// Refer to the docs on rendering arrays / objects out to your component



ReactDOM.render(
  <MoviesList />,
  document.getElementById("root")
)