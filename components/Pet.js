const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.adoptionHandler = this.adoptionHandler.bind(this)
  }

  adoptionHandler(event) {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    let genderSymbol
    if(this.props.pet.gender === 'male') {
      genderSymbol = '♂'
    } else {
      genderSymbol = '♀'
    }

    const disabledButton = <button className="ui disabled button">Already adopted</button>

    const adoptButton = <button className="ui primary button" onClick={this.adoptionHandler}>Adopt pet</button>
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} {genderSymbol}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? disabledButton : adoptButton }
        </div>
      </div>
    );
  }
}

module.exports = Pet;
