import React, { Component } from 'react';
import { render } from 'react-dom';
import * as $ from 'axios';
import { Stage, Layer } from 'react-konva';
import { Image } from 'react-konva';

class App extends Component {
  state = {
    isDragging: false
  };

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          
          <Image
            
            src="./components/shirtButtondown.gif"
            
            x={100}
            y={50}
            
            draggable
            
            
            onDragStart={() => {
              this.setState({
                isDragging: true
              });
            }}
            onDragEnd={() => {
              this.setState({
                isDragging: false
              });
            }}
          />
        </Layer>
      </Stage>
    );
  }
}

export default App;
