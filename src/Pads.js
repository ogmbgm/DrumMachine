import './Pads.css';
import Pad from './Pad';
import { Component } from 'react';

class Pads extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="display">
          <Pad letter="Q" name="Heater 1" link="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
          <Pad letter="W" name="Heater 1" link="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"/>
          <Pad letter="E" name="Heater 1" link="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"/>
          <Pad letter="A" name="Heater 1" link="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"/>
          <Pad letter="S" name="Heater 1" link="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"/>
          <Pad letter="D" name="Heater 1" link="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"/>
          <Pad letter="Z" name="Heater 1" link="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"/>
          <Pad letter="X" name="Heater 1" link="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"/>
          <Pad letter="C" name="Heater 1" link="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"/>
      </div>
    );
  }
}

export default Pads;
