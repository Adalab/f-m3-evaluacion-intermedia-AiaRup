import React, { Component } from 'react';
import './App.css';
import PokeList from './components/PokeList';
import Form from './components/Form';
import { pokemonList } from './data/pokemonData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPokemons: pokemonList,
      originalPokemonList: pokemonList,
      favoriteArr: []
    };
    this.filterList = this.filterList.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  filterList(event) {
    const value = event.currentTarget.value;
    const newArray = this.state.originalPokemonList.filter(pokemon => pokemon.name.toUpperCase().includes(value.toUpperCase()));
    this.setState({ filteredPokemons: newArray });
  }

  handleFavorite(event) {
    const id = parseInt(event.currentTarget.id);
    let newArray = [];
    if (this.state.favoriteArr.includes(id)) {
      newArray = this.state.favoriteArr.filter(item => item !== id);
    } else {
      newArray = [...this.state.favoriteArr, parseInt(id)];
    }
    this.setState({ favoriteArr: newArray });
  }

  render() {
    const { filteredPokemons } = this.state;
    return (
      <div className="page">
        <h1 className="page__title">Mi lista de pokemon</h1>
        <Form filterList={this.filterList} />
        <PokeList pokemonList={filteredPokemons} handleFavorite={this.handleFavorite} favList={this.state.favoriteArr} />
      </div>
    );
  }
}

export default App;
