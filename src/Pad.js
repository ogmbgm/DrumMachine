import { Component } from 'react';
import './Pad.css';

class Pad extends Component {
  constructor(props){
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handlePress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePress);
  }

  handlePress(event){
    if(event.code === 'Key' + this.props.letter){
      this.playSound()
    }
  }

  playSound(){
    this.props.change(this.props.letter)
    let sound = document.getElementById(this.props.letter);
    sound.currentTime=0;
    sound.play();
  }
  render(){
    return (
      <div id={this.props.letter + 'b'} onClick={this.playSound} className="drum-pad">
        <audio id={this.props.letter} className="clip" src={this.props.link}></audio>
        {this.props.letter}
      </div>
  );
  }
}

export default Pad;
