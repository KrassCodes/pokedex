import React from 'react';

class Pokedex extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoaded: false,
            pokemonName: [],
            pokemonPic: [],
            inputValue: 19
        }
    }

    componentDidMount() {
        this.searchPokemon()
    }

    updateInputValue(val){
            this.setState({
                inputValue: val.target.value
            });

        this.searchPokemon();
    }

    searchPokemon(){
        fetch("https://pokeapi.co/api/v2/pokemon/"+ this.state.inputValue)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    pokemonName: result.forms[0].name,
                    pokemonPic: result.sprites.front_default
                });
            }
        )
    }


    render() {
        return(
            <>
            <div>
                Enter pokemon number to see name and image!
            </div>
            <div>
                <input value={this.state.inputValue} onChange={val => this.updateInputValue(val)} />
            </div>
            <div>
                {this.state.pokemonName}
            </div>
              <div>
              <img src={this.state.pokemonPic} />
          </div>
          </>
        )
    }





}

export default Pokedex 