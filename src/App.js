import React from 'react'
import './App.css';
import Bank from './Bank'
import PadBank from './PadBank'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      bankOne: Bank[0],
      bankTwo: Bank[1],
      power: true,
      display: 'Heater Kit',
      currentPadBank: Bank[0],
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3,
      volume : Math.round(0.3 * 100)
    }
  }
    powerControl() {
      this.setState({
        power: !this.state.power,
      });
    }
    selectBank() {
      if (this.state.power) {
        if (this.state.currentPadBankId === 'Heater Kit') {
          this.setState({
            currentPadBank: Bank[1],
            display: 'Piano Kit',
            currentPadBankId: 'Piano Kit'
          });
        } else {
          this.setState({
            currentPadBank: Bank[0],
            display: 'Heater Kit',
            currentPadBankId: 'Heater Kit'
          });
        }
      }
    }
    displayClipName(name) {
      if (this.state.power) {
        this.setState({
          display: name
        });
      }
    }
    adjustVolume(e) {
      if (this.state.power) {
        this.setState({
          sliderVal: e.target.value,
          volume: Math.round(e.target.value * 100)
        });
      }
    }

    render() {
      const powerSlider = this.state.power
        ? {
            float: 'right'
          }
        : {
            float: 'left'
          };
      const bankSlider =
        this.state.currentPadBank === this.state.bankOne
          ? {
              float: 'left'
            }
          : {
              float: 'right'
            };
      {
        const clips = [].slice.call(document.getElementsByClassName('clip'));
        clips.forEach(sound => {
          sound.volume = this.state.sliderVal;
        });
      }
      return (
        <div className='inner-container' id='drum-machine'>
          <PadBank
            clipVolume={this.state.sliderVal}
            currentPadBank={this.state.currentPadBank}
            power={this.state.power}
            updateDisplay={(e)=>{this.displayClipName(e)}}
          />
  
          <div className='controls-container'>
            <p id='display'>{this.state.display}</p>
            <div className='volume-slider'>
                Volume:{' '}{this.state.volume}
                <input
                  max='1'
                  min='0'
                  onChange={(e)=>{this.adjustVolume(e)}}
                  step='0.01'
                  type='range'
                  value={this.state.sliderVal}
                />
            </div>
            <div className='controls-box'>
              <div className='control'>
                <p>Power</p>
                <div className='select' onClick={()=>{this.powerControl()}}>
                  <div className='inner' style={powerSlider} />
                </div>
              </div>
              <div className='control'>
                <p>Bank</p>
                <div className='select' onClick={(e)=> {this.selectBank(e)}}>
                  <div className='inner' style={bankSlider} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }


