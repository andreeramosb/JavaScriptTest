getPokemonData = (type, done) => {
  var request = getRequest(`https://pokeapi.co/api/v2/pokemon/${type}`);
  if (request.status === 200) {
    let res = JSON.parse(request.responseText);

    done(
      null,
      res.name,
      res.sprites.front_default,
      res.sprites.back_default,
      res.base_experience,
      res.weight
    );
  } else {
    done("request error", null);
  }
};

getRequest = (url) => {
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
qqww
  return request;
};
getPokemonData("pikachu", (err, items, items2, items3, items4, items5) => {
  if (err) {
    console.log(err);
  } else {
    console.log(items);
    console.log(items2);
    console.log(items3);
    console.log(items4);
    console.log(items5);
    const $name = document.querySelector("#name");
    $name.textContent = items;
    let $image = document.querySelector("#image");
    $image.setAttribute("src", items2);
    let $image2 = document.querySelector("#image-back");
    $image2.setAttribute("src", items3);
    const $experience = document.querySelector("#base-experience");
    $experience.textContent = items4;
    const $weight = document.querySelector("#weight");
    $weight.textContent = items5 / 10;
  }
});
console.log("Hello pokemon");
