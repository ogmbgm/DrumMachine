import React from 'react';
import './DrumMachine.css';
import Pads from './Pads';
import Display from './Display';

class DrumMachine extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayText: ""
    }
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(text){
    this.setState({
      displayText: text
    });
  }

  render(){
    return (
      <div id="drum-machine">
          <Pads change={this.changeDisplay}/>
          <Display text={this.state.displayText}/>
      </div>
    );
  }
}

export default DrumMachine;
