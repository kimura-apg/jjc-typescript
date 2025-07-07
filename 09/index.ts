const pokeAPIURL = "https://pokeapi.co/api/v2/pokemon/ditto";

async function fetchPokeAPI() {
  const result = await fetch(pokeAPIURL);
  const resultJson = await result.json();

  console.log(resultJson.abilities);

  const comparision = 1 > 2;

  // fetch(pokeAPIURL)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
}

fetchPokeAPI();
