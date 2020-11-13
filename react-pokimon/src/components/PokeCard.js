import React from "react";
import { useParams } from "react-router-dom";

const PokeCard = ({ pokemonName, pokeData }) => {
  // const { pokemonName } = useParams();
  console.log("pokemonName=>", pokemonName);
  // const [pokeData, setPokeData] = useState("");
  // // console.log("pokeData=>", pokeData);
  // let err = "Please enter valid pokemon...";
  // const getPokeData = async () => {
  //   try {
  //     let rawPokeData = await fetch(
  //       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  //     );
  //     let processedPokeData = await rawPokeData.json();
  //     console.log("processedPokeData", processedPokeData);
  //     setPokeData(processedPokeData);
  //   } catch (error) {
  //     console.log(`Error:${err}`);
  //   }
  // };

  // useEffect(() => {
  //   getPokeData();
  // }, [pokemonName]);

  return pokeData ? (
    <div>
      <h1>{pokeData.name}</h1>
      <img src={pokeData.sprites.front_default}></img>
    </div>
  ) : (
    <div></div>
  );
};

export default PokeCard;
// fetch(`${bitcoinApi}?currency=${currency}`)
//   .then((response) => response.json())
//   .then((data) => setBitcoinData(data.bpi))
//   .catch((e) => console.error(e));

// const { pokemonName } = useParams();
// const [pokeData, setPokeData] = useState("");
// console.log("pokemonName=>", pokemonName);

// const getPokeData = async () => {
//   let rawPokemonData = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//   );
//   // console.log("rawPokemonData=>", rawPokemonData);
//   let processedData = await rawPokemonData.json();
//   console.log("processedData=>", processedData);
//   setPokeData(processedData);
// };

// useEffect(() => {
//   console.log("inside of useEffect");
//   getPokeData();
// }, [pokemonName]);

// return null;
