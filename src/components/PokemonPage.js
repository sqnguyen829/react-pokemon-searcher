import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemons:[],
    searchTerm:''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res=> res.json())
    .then(data => this.setState({
      pokemons:data
    }))
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleAddPokemon = (newPokemon) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(pokemon => {
      this.setState({
        pokemons:[...this.state.pokemons, pokemon]
      })
    })
  }

  render() {
    let pokemons = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    console.log(pokemons)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleAddPokemon={this.handleAddPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemons={pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
