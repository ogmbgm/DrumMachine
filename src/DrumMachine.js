import './DrumMachine.css';
import Pads from './Pads';

function DrumMachine() {
  return (
    <div id="drum-machine">
      <div id="display">
        <Pads/>
      </div>
    </div>
  );
}

export default DrumMachine;
