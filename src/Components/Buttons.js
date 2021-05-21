import React, { Component } from 'react'

export default class Buttons extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const isActive = this.props.isActive;

        return (
            <div className="buttons">
                { isActive ? <button className="stop" onClick={this.props.handleStop}>Stop</button> : 
                    <button className="start" onClick={this.props.handleStart}>Start</button> }
                <button className="reset" onClick={ this.props.handleReset }>Reset</button>               
            </div>
        )
    }
}
