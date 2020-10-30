import React from "react";
import Greeting from "./Greeting"
// Create a React App which:

// has a button that logs in / logs out the user 
// Change the wording on the button to say Log in / Log out depending on the user being logged in or not

// Displays if the user is logged in or not
// Render a greeting to the screen if the user is logged in

// Keep the logged in status in state

// Refer to the Conditional rendering in the docs if you get stuck
class LoginLogout extends React.Component{
  constructor(props){
    super(props)
    this.state = {isLoggedIn: false}
  }

handleButtonClick = () => {
  this.setState({isLoggedIn: !this.state.isLoggedIn})
 
}


  render(){
    const isLoggedIn = this.state.isLoggedIn
    // console.log("in render isLoggedIn=>", isLoggedIn)
    let button = isLoggedIn? <button onClick={this.handleButtonClick}>Logout</button> : <button onClick={this.handleButtonClick}>Login</button>
    // if(isLoggedIn){
    //   button = <button onClick={this.handleButtonClick}>Logout</button>
      
      
    // } else {
    //   button = <button onClick={this.handleButtonClick}>Login</button>

    // }

    return(
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

export default LoginLogout