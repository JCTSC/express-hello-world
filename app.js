const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.type('html').send(html));

app.get('/req', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})


app.get('/meunome', (req, res) => {
  res.send('Meu nome é Júlio César trevisan Soares de Camargo');
});

app.get('/tico', (req, res) => {
  res.send('teco');
});

app.get('/pokemons', (req, res) => {
  const pokemons = [
      "Pikachu", 
      "Caterpie", 
      "Pidgeotto", 
      "Bulbasaur", 
      "Charmander", 
      "Squirtle", 
      "Butterfree", 
      "Krabby", 
      "Primeape", 
      "Muk"
  ];
  res.json(pokemons);
});

app.post('/series', (req, res) => {
  const series = [
      "Jurassic world",
      "Undertale ",
      "Terminator"
  ];
  res.json(series);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

