const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    const petComponents = this.props.pets.map(function(pet) {
      let adopted
      if(this.props.adoptedPets.includes(pet.id)) {
        adopted = true
      } else {
        adopted = false
      }
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={adopted}/>
    }, this)
    return (
      <div className="ui cards">
        {petComponents}
      </div>
    )
  }
}

module.exports = PetBrowser;
