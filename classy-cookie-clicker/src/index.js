import React, {Component} from "react"
import ReactDOM from "react-dom"
//Make a page in a React app (doesn't have to be a fresh, empty React app) that meets these requirements:

// Calls a class component named "CookieGame", which is a class & takes in a number as a prop

// The "CookieGame" component should be able to do these things:

// Display a number to the screen as the game's score, with the number's initial value being whatever the number in the prop is set to.

// Render a button that, when clicked, increases the number by one.

// Render a button that, when clicked, decreases the number by one.

// Use the class' state to keep track of how many times each of those buttons has been clicked (eg. one variable per button).

// Show text on the screen to display how many times each of those buttons has been clicked.

class CookieGame extends Component {
  constructor(props){
  super(props)
  this.state = { //this is initializing
    score: 0,
    clickIncrement: 0,
    clickDecrement: 0
  }
  this.numIncrement = this.numIncrement.bind(this);
}
 numIncrement = ()=> { // this is updating the state
    this.setState({score: this.state.score+1, clickIncrement: this.state.clickIncrement+1})

}

numDecrement = ()=> {
  this.setState({score: this.state.score-1, clickDecrement: this.state.clickDecrement+1})
  

}
render () {
  return (
    <div>
      <h1>{this.state.score}</h1>
      <h3>{this.state.clickIncrement}</h3>
      <button onClick={this.numIncrement}>Increase</button>
      <button onClick={this.numDecrement}>Decrease</button>
      <h3>{this.state.clickDecrement}</h3>
  </div>
    )
}
}

ReactDOM.render(<CookieGame />,
  document.getElementById("root"))



