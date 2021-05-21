import './App.css';
import Timer from './Components/Timer';
import Buttons from './Components/Buttons';
import React, { Component } from 'react';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      isActive : false,
      milisec : 0,
      minutes: 0,
      seconds: 0,
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleStart(){    
      this.interval = setInterval(() =>{
        this.setState({
          isActive : true,
          milisec: this.state.milisec === 100 ? 0 : this.state.milisec + 1,
          seconds: this.state.milisec === 60 ? this.state.seconds + 1 : this.state.seconds,
        });  
        if(this.state.seconds === 60 )
        {
          this.setState({
            minutes : this.state.seconds === 60 ? this.state.minutes + 1 : this.state.minutes,
            seconds : 0,
          })
        }
      }, 10);
  }

  handleStop() {
    clearInterval(this.interval);
    this.setState({
      isActive : false,
    })
  }

  handleReset(){
    clearInterval(this.interval);
    this.setState({
      isActive : false,
      milisec : 0,
      seconds : 0,
      minutes : 0
    })
  }

    render() {      
      return (
        <div className="App">
          <Timer milisec = { this.state.milisec } minutes = { this.state.minutes } seconds = { this.state.seconds } />
          <Buttons isActive={ this.state.isActive } handleStart={this.handleStart} handleStop={this.handleStop} handleReset={this.handleReset}/>
        </div>
        )
    }
}

