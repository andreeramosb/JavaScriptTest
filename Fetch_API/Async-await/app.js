// -- Pokemon  Promise -------------------------------------------------------------------
const getPokemonDataPromises = async (pokemon) => {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    let data = await res.json();

    let $name = data.name;
    let $frontImage = data.sprites.front_default;
    let $backImage = data.sprites.back_default;
    let $baseExperience = data.base_experience;
    let $weight = data.weight;
    consoleDisplay($name, $frontImage, $backImage, $baseExperience, $weight);
    displayScreen($name, $frontImage, $backImage, $baseExperience, $weight);
    console.info("POKEMON FINISHED"); //------------------------------
  } catch (error) {
    console.error("YOU HAVE ERROR -> (" + error + ")");
  }
};
//----------------------------------------------------------------------------------------

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

getPokemonDataPromises("pikachu");
console.info("HELLO POKEMON");
