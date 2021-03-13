import React from 'react';
import './DrumMachine.css';
import Pads from './Pads';

class DrumMachine extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="drum-machine">
          <Pads/>
      </div>
    );
  }
}

export default DrumMachine;
