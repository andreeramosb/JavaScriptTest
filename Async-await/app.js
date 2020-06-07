// -- Pokemon  Promise -------------------------------------------------------------------
getPokemonDataPromises = (type) => {
  return new Promise((resolve, reject) => {
    var request = getRequest(`https://pokeapi.co/api/v2/pokemon/${type}`);
    if (request.status === 200) {
      let res = JSON.parse(request.responseText);
      resolve(res);
    } else {
      reject("Error en la petición");
    }
  });
};
//----------------------------------------------------------------------------------------

//-- Pokemon Request ---------------------------------------------------------------------
getRequest = (url) => {
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();

  return request;
};
//--------------------------------------------------------------------------------------

// -- Get Pokemon -------------------------------------------------------------------
(async () => {
  try {
    let pokemon = await getPokemonDataPromises("treecko");

    let $name = pokemon.name;
    let $frontImage = pokemon.sprites.front_default;
    let $backImage = pokemon.sprites.back_default;
    let $baseExperience = pokemon.base_experience;
    let $weight = pokemon.weight;

    consoleDisplay($name, $frontImage, $backImage, $baseExperience, $weight);
    displayScreen($name, $frontImage, $backImage, $baseExperience, $weight);
    console.log("POKEMON FINISHED"); //-------------------------------------
  } catch (err) {
    console.error("YOU HAVE ERROR -> (" + error + ")");
  }
})();
//------------------------------------------------------------------------------------

// -- Display Data on Console -------------------------------------------------------
consoleDisplay = ($name, $frontImage, $backImage, $baseExperience, $weight) => {
  console.log($name);
  console.log($frontImage);
  console.log($backImage);
  console.log($baseExperience);
  console.log($weight);
};
//-------------------------------------------------------------------------------------

// -- Display Data on Screen ----------------------------------------------------------
displayScreen = ($name, $frontImage, $backImage, $baseExperience, $weight) => {
  const $nameHtml = document.querySelector("#name");
  $nameHtml.textContent = $name;
  let $image = document.querySelector("#image");
  $image.setAttribute("src", $frontImage);
  let $image2 = document.querySelector("#image-back");
  $image2.setAttribute("src", $backImage);
  const $experience = document.querySelector("#base-experience");
  $experience.textContent = $baseExperience;
  const $weightHtml = document.querySelector("#weight");
  $weightHtml.textContent = $weight / 10;
};
//-------------------------------------------------------------------------------------

console.log("HELLO POKEMON");
