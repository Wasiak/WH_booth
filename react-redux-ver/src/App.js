import React, { Component } from 'react';
import './App.css';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

class App extends Component {
  state = {
    activePage: 1
  }

  nextPageHandler = (newActivePage) => {
    // console.log('elo next page');
    this.setState( { activePage: newActivePage } )
  }

  render() {

    let content;

    if(this.state.activePage === 1) {
      content = <Page1 click={this.nextPageHandler.bind(this, 2)} />
    } else if (this.state.activePage === 2) {
      content = <Page2 click={this.nextPageHandler.bind(this, 3)} />
    }

    return (
      <div className="App">
        <h1>HW Booth start page</h1>
        <p>active page: {this.state.activePage}</p>
        {content}
      </div>
    );
  }
}

export default App;
