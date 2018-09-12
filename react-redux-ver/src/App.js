import React, { Component } from 'react';
import './App.css';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';

class App extends Component {
  state = {
    activePage: 1,
    value1: 'yo',
    value2: 'default'
  }

  nextPageHandler = (newActivePage) => {
    // console.log('elo next page');
    this.setState( { activePage: newActivePage } )
  }

  changeValue1Handler = (newValue) => {
    // console.log('elo next page');
    this.setState( { value1: newValue } )
  }

  changeValue2Handler = (evt) => {
    console.log('elo selet change')
    // console.log('elo val 2 = ', evt.options[evt.selectedIndex].value);
    this.setState( { value2: evt.target.value } )
  }

  render() {

    let content;

    if(this.state.activePage === 1) {
      content = 
        <Page1 
          changeValue2
          click={this.nextPageHandler.bind(this, 2)} />
    } else if (this.state.activePage === 2) {
      content = 
        <Page2 
          state={this.state} 
          click={this.nextPageHandler.bind(this, 3)} 
          changeValue1={this.changeValue1Handler.bind(this, 'elo')}
          changeValue2={this.changeValue2Handler} />
    } else if (this.state.activePage === 3) {
      content = 
        <Page3 
          state={this.state} 
          click={this.nextPageHandler.bind(this, 4)} />
    }

    return (
      <div className="App">
        <h1>HW Booth start page</h1>
        <p>active page: {this.state.activePage}</p>
        <p>current value1: {this.state.value1}</p>
        <p>current value2: {this.state.value2}</p>
        {content}
      </div>
    );
  }
}

export default App;
