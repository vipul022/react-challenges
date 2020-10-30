import React from "react";

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn

  if(isLoggedIn) {
    return <h1>Welcome!</h1>
    
  } else {
    return <h1>Please Sign up!</h1>
    
  }
}

export default Greeting