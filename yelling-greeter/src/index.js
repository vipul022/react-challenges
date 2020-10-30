import React from "react"
import ReactDOM from "react-dom"

//! Make a page in a React app (doesn't have to be a fresh, empty React app) that meets these requirements:

//! Calls a function component named "YellingGreeter", which is a function & takes in a string as a prop

//! The "YellingGreeter" component should take the string, convert it all to uppercase letters, and return that string in a H1 tag.



const YellingGreeter = (props)=> {
return <h1>{props.name.toUpperCase()}</h1>
}

ReactDOM.render(<YellingGreeter name="Hello World again"/>,
 document.getElementById("root") )