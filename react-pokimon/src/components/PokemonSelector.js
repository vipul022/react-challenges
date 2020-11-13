import React, { useState } from "react";

const PokemonSelector = ({ changePokemon, history }) => {
  const [pokemon, setPokemon] = useState("");

  console.log("pokemon", pokemon);

  const handleSubmit = (event) => {
    event.preventDefault();
    changePokemon(pokemon);
    history.push("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setPokemon(value);
  };

  console.log("pokemon", pokemon);

  return (
    <form onSubmit={handleSubmit}>
      <label>Pokemon</label>
      <input
        required
        type="text"
        name="pokemon"
        placeholder="Enter Pokemon name..."
        onChange={handleChange}
      />
      <input type="submit" value="Search Pokemon"></input>
    </form>
  );
};
export default PokemonSelector;
