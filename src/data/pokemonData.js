const pokemonList = [
  { id: 1, name: 'bulbasaur', types: ['poison', 'grass'], evolution: null, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', isFavorite: false },
  { id: 2, name: 'ivysaur', types: ['poison', 'grass'], evolution: 'bulbasaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', isFavorite: false },
  { id: 3, name: 'venusaur', types: ['poison', 'grass'], evolution: 'ivysaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', isFavorite: false },
  { id: 4, name: 'charmander', types: ['fire'], evolution: null, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', isFavorite: false },
  { id: 5, name: 'charmeleon', types: ['fire'], evolution: 'charmander', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', isFavorite: false },
  { id: 6, name: 'charizard', types: ['flying', 'fire'], evolution: 'charmeleon', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', isFavorite: false },
  { id: 7, name: 'squirtle', types: ['water'], evolution: null, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', isFavorite: false },
  { id: 8, name: 'wartortle', types: ['water'], evolution: 'squirtle', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png', isFavorite: false },
  { id: 9, name: 'blastoise', types: ['water'], evolution: 'wartortle', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', isFavorite: false },
  { id: 10, name: 'caterpie', types: ['bug'], evolution: null, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png', isFavorite: false }
];

export { pokemonList };
