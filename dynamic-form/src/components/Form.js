import React from "react"
import RenderInputFields from "./RenderInputFields "
class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = { noOfInputFields: 0}
  }


handleClick = (event) => {
  event.preventDefault()
  console.log("event=>", event.target.children)
  console.log(event.target.children.text.value)
  this.setState({value: event.target.children.text.value})
}
handleAddClick = () => {
  // event.preventDefault()
  this.setState({noOfInputFields:  this.state.noOfInputFields+1})
  
}

handleRemoveClick = () => {
  this.setState({noOfInputFields:  this.state.noOfInputFields-1})
  
}
handleResetClick = ()=> {
  this.setState({noOfInputFields:  0})
}

  render() {
    const noOfInputFields = this.state.noOfInputFields
    console.log(noOfInputFields)
  
    return (
      <div>
        
        <button  onClick={this.handleAddClick}>ADD</button>
        <button  onClick={this.handleRemoveClick}>Remove</button>
        <button  onClick={this.handleResetClick}>Reset</button>
        <RenderInputFields noOfInputFields= {noOfInputFields} /> 
     
        
     
        
      </div>
    )
  }
}
export default Form

