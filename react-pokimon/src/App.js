import React, { useState, useEffect } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import PokeCard from "./components/PokeCard";
import Nav from "./components/Nav";
import PokemonSelector from "./components/PokemonSelector";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");

  const [pokeData, setPokeData] = useState("");
  // console.log("pokeData=>", pokeData);
  // let err = "Please enter valid pokemon...";
  const getPokeData = async () => {
    try {
      let rawPokeData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      let processedPokeData = await rawPokeData.json();
      console.log("processedPokeData", processedPokeData);
      setPokeData(processedPokeData);
    } catch (error) {
      console.log(`Error:${error}`);
    }
  };

  useEffect(() => {
    pokemonName && getPokeData();
  }, [pokemonName]);

  const changePokemon = (pokemon) => {
    setPokemonName(pokemon);
  };
  return (
    <div>
      <h1>Pokemon Viewer</h1>
      <BrowserRouter>
        <Nav />
        {/* <Route path="/pokemon/:pokemonName" children={<PokeCard />} /> */}

        <Route
          path="/pokemon/search"
          render={(props) => (
            <PokemonSelector {...props} changePokemon={changePokemon} />
          )}
        />
        <Route
          exact
          path="/"
          render={(props) => (
            <PokeCard
              {...props}
              pokemonName={pokemonName}
              pokeData={pokeData}
            />
          )}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
