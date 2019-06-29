const pokiUrl = 'http://pokeapi.salestock.net/api/v2/pokemon/'
// const jokes = 'https://icanhazdadjoke.com/'

// fetch takes a url, and an object with a few optional parameters. 
// Ex: {method: 'POST', headers: {'Content-Type': 'application/json'}}
// The default method of fetch is a GET request
// For now all we have to pass fetch is the url

// Create a function, after submit, sends a GET request.

function goFetch(e) {
  e.preventDefault()

  let input = e.target[0].value

  const url = `${pokiUrl}${input}/`

// GET request based on input
// Res object
fetch(url)
.then(res => res.json())
.then(json => {
  let element = document.getElementById('result')
  element.innerHTML = json.name;
  let pic = document.getElementById('pic')
  pic.src = json.sprites.front_default;
  // console.log(json);
})
.catch(err => console.log(err))
}

// Grab the form
// Add 'submit' listener to call function.

let form = document.getElementById('input-form')
form.addEventListener('submit', goFetch)