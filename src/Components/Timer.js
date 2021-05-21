import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const milisec = this.props.milisec;
        const minutes = this.props.minutes;
        const seconds = this.props.seconds;

        return (
            <div className="timer">
                {(minutes >= 10)? minutes : "0" + minutes}:
                {(seconds >= 10)? seconds : "0" + seconds}:
                {(milisec >= 10)? milisec : "0" + milisec}            
            </div>
        )
    }
}
