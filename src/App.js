import React from 'react'
import './App.css';
import Bank from './Bank'
import PadBank from './PadBank'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      bank: Bank,
      display: 'Piano Kit',
      power: 'on',
    }
  }

    displayClipName(name) {
      if (this.state.power) {
        this.setState({
          display: name
        });
      }
    }

    render() {
      return (
        <div className='app'>
          <h2>Drum Machine</h2>
          <div className='inner-container' id='drum-machine'>
            <PadBank
              clipVolume={this.state.sliderVal}
              bank={this.state.bank}
              power={this.state.power}
              updateDisplay={(e)=>{this.displayClipName(e)}}
            />
    
            <div className='controls-container'>
              <p id='display'>{this.state.display}</p>
            </div>
          </div>
        </div>
      )
    }
  }


