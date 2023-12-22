import Pokemon from "./Pokemon";


const PokemonList = ({ pokemons }) => {

  // console.log("list of" + pokemons)

  const pokemonComponents = pokemons.results.map((pokemon, index) => {
    // console.log(index);
    return <Pokemon key={index} pokemon={pokemon} />;

  });

  return <>{pokemonComponents}</>;
};



export default PokemonList;
