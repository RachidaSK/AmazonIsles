import React, { Component } from 'react';
import * as $ from 'axios';


class App extends Component {

  state = {
    notesList: [],
    newNote: ''
  }

  handleChange = (event) => {
    this.setState({newNote: event.target.value})
  }

<<<<<<< HEAD:src/App.js
  // handleClick = (event) => {
  //   event.preventDefault();
  //   $.post('/api/note', {content: this.state.newNote})
  //   .then((result) => {
  //     console.log(result.data);
  //   })
  // }

  // componentDidMount(){
  //   $.get('/api/notes')
  //   .then((result) => {
  //     this.setState({notesList: result.data})
  //   })
  // }
=======
  handleClick = (event) => {
    event.preventDefault();
    /*
    $.post('/api/note', {content: this.state.newNote})
    .then((result) => {
      console.log(result.data);
    }) */
  }

  componentDidMount(){
    /* $.get('/api/notes')
    .then((result) => {
      this.setState({notesList: result.data})
    }) */
  }
>>>>>>> faf410984dcabe5374e4108c06943e233245e21f:client/src/App.js

  render() {
    return (
      <div className="App">
        <form>
          <input val={this.state.newNote} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
