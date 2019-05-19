import React, { Component } from 'react';
import './App.css';
import PokeList from './components/PokeList';
import Form from './components/Form';
import { pokemonList } from './data/pokemonData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPokemons: [...pokemonList],
      originalPokemonList: [...pokemonList]
    };
    this.filterList = this.filterList.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.changeIsFavorite = this.changeIsFavorite.bind(this);
  }

  filterList(event) {
    const value = event.currentTarget.value;
    const newArray = this.state.originalPokemonList.filter(pokemon => pokemon.name.toUpperCase().includes(value.toUpperCase()));
    this.setState({ filteredPokemons: newArray });
  }

  handleFavorite(event) {
    const id = event.currentTarget.id;
    this.setState({
      // originalPokemonList: this.changeIsFavorite(id, this.state.originalPokemonList),
      filteredPokemons: this.changeIsFavorite(id, this.state.filteredPokemons)
    });
  }

  changeIsFavorite(id, array) {
    return array.map(pokemon => {
      if (pokemon.id === parseInt(id)) {
        console.log('pokemon', pokemon);
        console.log('isFavorite', pokemon.isFavorite);
        pokemon.isFavorite = !pokemon.isFavorite;
      }
      return pokemon;
    });
  }

  render() {
    const { filteredPokemons } = this.state;
    return (
      <div className="page">
        <h1 className="page__title">Mi lista de pokemon</h1>
        <Form filterList={this.filterList} />
        <PokeList pokemonList={filteredPokemons} handleFavorite={this.handleFavorite} />
      </div>
    );
  }
}

export default App;
