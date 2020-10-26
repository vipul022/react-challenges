import React from "react"
import HappyMessage  from "./HappyMessage"
import {randomMessage} from "./helpers"

const App = ()=> {
  return <HappyMessage message={randomMessage()}/>// here message= randomMessage is passed as props object to HappyMessage component
}

export default App