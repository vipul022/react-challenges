import React from "react"

const Card = (props) => {
  const {givenName, surname, email, phone, houseName, street, suburb, state, postcode, country} = props
  return(
    <div>
      <h1>{givenName} {surname}</h1>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <h3>Address: {houseName} {street} {suburb} {state}</h3>
      <h3>Postcode: {postcode}</h3>
      <h3>Country: {country}</h3>

    </div>
  )
}
export default Card