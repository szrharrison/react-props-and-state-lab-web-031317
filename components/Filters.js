const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super()

    this.state = props.filters
    this.select = this.select.bind(this)
  }

  select(event) {
    this.setState({
      type: event.target.value
    }, () =>   this.props.onChangeType(this.state.type))
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.type} onChange={this.select}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
