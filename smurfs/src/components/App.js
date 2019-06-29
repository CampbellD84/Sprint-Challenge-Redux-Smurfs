import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf } from "../actions";

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChange = evt => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [evt.target.name]: evt.target.value
      }
    });
  };

  handleAddSmurf= evt => {
    evt.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    })
  }

  render() {
    return (
      <div className="App">
        {/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        {this.props.smurfs.map(smurf => (
          <div className="smurf" key={smurf.id}>
            <h3>{smurf.name}</h3>
            <p>{`Age: ${smurf.age} years old`}</p>
            <p>{`Height: ${smurf.height} centimeters tall`}</p>
          </div>
        ))}
        <div className="smurf-form">
          <form onSubmit={this.handleAddSmurf}>
            <label>
              Name
            </label>
            <input 
              type="text" 
              name="name" 
              value={this.state.smurf.name} 
              onChange={this.handleChange}
            />
            <label>
              Age
            </label>
            <input 
              type="number" 
              name="age" 
              value={this.state.smurf.age} 
              onChange={this.handleChange}
            />
            <label>
              Height
            </label>
            <input 
              type="number" 
              name="height" 
              value={this.state.smurf.height} 
              onChange={this.handleChange}
            />
            <button onClick={this.handleAddSmurf}>Add Smurf</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fecthingSmurfs: state.fecthingSmurfs
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
