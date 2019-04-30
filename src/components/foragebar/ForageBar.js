import React from 'react';
import Menu from './Menu';

export default class ForageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    fetch('/search', { /** options */ }).then(result => {
      // update table data
      this.props.updateData(result);
    });
  }
  
  render() {
    return (
      <div className="forage-bar">
        <Menu cols />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Forage" />
        </form>
      </div>
    )
  }
}
