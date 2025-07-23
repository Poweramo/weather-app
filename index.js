const form = document.querySelector("form");
const searchBar = document.querySelector(`input[type="text"]`);
let id;

async function g() {
  await fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

g();
