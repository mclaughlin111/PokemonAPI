const Pokemon = ({pokemon}) => {

    const requestPokemonDetails = pokemon.url; // Pokemon info URL

    let sprite = requestPokemonDetails.base_experience


    return (
    <>
    <h3>{pokemon.name}</h3>
    {/* <img src="" alt="Girl in a jacket" width="500" height="600"></img> */}
    </>
    );
}
 
export default Pokemon;