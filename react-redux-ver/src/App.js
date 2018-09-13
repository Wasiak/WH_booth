import React, { Component } from 'react';
import './App.css';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';
import PageAdmin from './Pages/PageAdmin';

class App extends Component {
  state = {
    activePage: 1,
    title: 'title',
    mail: 'mail@example.com',
    frame: 'frame_1',
    filter: 'filter_1',
    layout: 'square_1',
    copyAmount: 1,
    photoDelay: 5,
    workTime: 1,
    timeRemaining: 3600
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

  changePhotoDelayHandler = (evt) => {
    this.setState( { photoDelay: evt.target.value } )
  }
  
  changeWorkTimeHandler = (evt) => {
    this.setState( { workTime: evt.target.value * 3600 } )
  }

  changeCopyAmountHandler = (evt) => {
    this.setState( { copyAmount: evt.target.value } )
    console.log('PRINTING...')
  }

  changeRemainingTimeHandler = (newVal) => {
    this.setState( { timeRemaining: newVal } )
  }

  startTimerHandler = () => {
    const that = this;
    var timer = this.state.workTime, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // that.state.timeRemaining = minutes + ":" + seconds;
        that.changeRemainingTimeHandler(minutes + ":" + seconds);

        if (--timer < 0) {
          timer = this.state.timeRemaining;
        }
        if (timer === 0) {
          alert('end time!');
          clearInterval(interval);
        }
    }, 1000);
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
          changePhoto={this.changePhotoDelayHandler}
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
    } else if (this.state.activePage === 'admin') {
      content = 
        <PageAdmin 
          state={this.state} 
          click={this.nextPageHandler.bind(this, 1)} 
          changeWorkTime={this.changeWorkTimeHandler}
          startTimer={this.startTimerHandler}
        />
    }

    return (
      <div className="App">
        <h1>HW Booth start page</h1>
        <span>remaining time: {this.state.timeRemaining}</span>
        <button onClick={this.nextPageHandler.bind(this, 'admin')}>admin</button>
        <div className='values-list'>
          <span>active page: {this.state.activePage}</span>
          <span>current title: {this.state.title}</span>
          <span>current mail: {this.state.mail}</span>
          <span>current frame: {this.state.frame}</span>
          <span>current filter: {this.state.filter}</span>
          <span>current layout: {this.state.layout}</span>
          <span>current photoDelay: {this.state.photoDelay}</span>
          <span>current copyAmount: {this.state.copyAmount}</span>
          <span>current work time: {this.state.workTime}</span>
        </div>
        {content}
      </div>
    );
  }
}

export default App;
