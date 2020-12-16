import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    flip:true
  }

  handleFlip = () => {
    this.setState({
      flip: !this.state.flip
    })
  }

  render() {
    let pokemon = this.props.pokemon
    return (
      <Card onClick={() => this.handleFlip()}>
        <div>
          <div className="image">
            {this.state.flip?
              <img src={pokemon.sprites.front} alt="oh no!" />
              :
              <img src={pokemon.sprites.back} alt="oh no!" />
            }
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
