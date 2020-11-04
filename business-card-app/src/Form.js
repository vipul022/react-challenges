import React from "react"
import Card from "./Card"
class Form extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      givenName: "",
      surname: "",
      email: "",
      phone: "",
      houseName: "",
      street: "",
      suburb: "",
      state: "",
      postcode: "",
      country: ""

    }
  }

  onInputChange = (event) => {
    // ! destructuring the event.targer below to use name and value in setState
    const {name ,value} = event.target
    console.log("name", name)
    console.log("value=>", value)
    this.setState({[name]: value})
  }
  // handleSubmit = (event) =>{
  //   event.preventDefault();

  // }
  render() {
    const {givenName, surname, email, phone, houseName, street, suburb, state, postcode, country} = this.state

    return(
      <div>
        <h1>{givenName} {surname}</h1>
        {/* onChange={(event) => this.onInputChange("painter",event)} */}
        <form onSubmit={this.handleSubmit}>
          <label>Given Name
            <input type="text" name="givenName" value={this.state.givenName} onChange={this.onInputChange}/>
          </label>
          <label>Surname
            <input type="text" name="surname" value={this.state.surname} onChange={this.onInputChange}/>
          </label>
          <label>Email
            <input type="email" name="email" value={this.state.email} onChange={this.onInputChange}/>
          </label>
          <label>Phone
            <input type="text" name="phone" value={this.state.phone} onChange={this.onInputChange}/>
          </label>
         
          <label>House Name
            <input type="text" name="houseName" value={this.state.houseName} onChange={this.onInputChange}/>
          </label>
          <label>Street
            <input type="text" name="street" value={this.state.street} onChange={this.onInputChange}/>
          </label>
          <label>Suburb
            <input type="text" name="suburb" value={this.state.suburb} onChange={this.onInputChange}/>
          </label>
          <label>State
            <input type="text" name="state" value={this.state.state} onChange={this.onInputChange}/>
          </label>
          <label>Postcode
            <input type="text" name="postcode" value={this.state.postcode} onChange={this.onInputChange}/>
          </label>
          <label>Country
            <input type="text" name="country" value={this.state.country} onChange={this.onInputChange}/>
          </label>
        </form>
        <Card
          givenName={givenName}
          surname={surname}
          email={email}
          phone={phone}
          houseName={houseName}
          street={street}
          suburb={suburb}
          state={state}
          postcode={postcode}
          country={country}

        />
      </div>
    ) 
    
  }
}
export default Form
// houseName, street, suburb, state, postcode, country
