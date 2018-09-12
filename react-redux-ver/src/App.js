import React, { Component } from 'react';
import './App.css';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';

class App extends Component {
  state = {
    activePage: 1,
    title: 'title',
    mail: 'mail@example.com',
    frame: 'frame_1',
    filter: 'filter_1',
    layout: 'square_1',
    copyAmount: 1
  }

  nextPageHandler = (newActivePage) => {
    this.setState( { activePage: newActivePage } )
  }

  changeTitleHandler = (evt) => {
    this.setState( { title: evt.target.value } )
  }

  changeMailHandler = (evt) => {
    this.setState( { mail: evt.target.value } )
  }

  changeFrameHandler = (evt) => {
    this.setState( { frame: evt.target.value } )
  }

  changeFilterHandler = (evt) => {
    this.setState( { filter: evt.target.value } )
  }

  changeLayoutHandler = (evt) => {
    this.setState( { layout: evt.target.value } )
  }

  changeCopyAmountHandler = (evt) => {
    this.setState( { copyAmount: evt.target.value } )
    console.log('PRINTING...')
  }

  render() {

    let content;

    if(this.state.activePage === 1) {
      content = 
        <Page1 
          changeValue2
          click={this.nextPageHandler.bind(this, 2)} 
        />
    } else if (this.state.activePage === 2) {
      content = 
        <Page2 
          state={this.state} 
          click={this.nextPageHandler.bind(this, 3)} 
          changeTitle={this.changeTitleHandler}
          changeMail={this.changeMailHandler} 
        />
    } else if (this.state.activePage === 3) {
      content = 
        <Page3 
          state={this.state} 
          click={this.nextPageHandler.bind(this, 4)} 
        />
    } else if (this.state.activePage === 4) {
      content = 
        <Page4 
          state={this.state} 
          click={this.nextPageHandler.bind(this, 5)} 
          changeFrame={this.changeFrameHandler}
          changeFilter={this.changeFilterHandler}
          changeLayout={this.changeLayoutHandler} 
        />
    } else if (this.state.activePage === 5) {
      content = 
        <Page5 
          state={this.state} 
          click={this.nextPageHandler.bind(this, 6)} 
        />
    } else if (this.state.activePage === 6) {
      content = 
        <Page6 
          state={this.state} 
          click={this.nextPageHandler.bind(this, 3)} 
          changeCopyAmount={this.changeCopyAmountHandler}
        />
    }

    return (
      <div className="App">
        <h1>HW Booth start page</h1>
        <div className='values-list'>
          <span>active page: {this.state.activePage}</span>
          <span>current title: {this.state.title}</span>
          <span>current mail: {this.state.mail}</span>
          <span>current frame: {this.state.frame}</span>
          <span>current filter: {this.state.filter}</span>
          <span>current layout: {this.state.layout}</span>
          <span>current copyAmount: {this.state.copyAmount}</span>
        </div>
        {content}
      </div>
    );
  }
}

export default App;
