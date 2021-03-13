import './Display.css';
import { Component } from 'react';

class Display extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="display">
          {this.props.text}
      </div>
    );
  }
}

export default Display;