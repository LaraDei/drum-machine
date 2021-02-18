import React from 'react'
import Pad from './Pad'

export default class PadBank extends React.Component {
  
    render() {
      let padBank;
      if (this.props.power) {
        padBank = this.props.bank.map((audioObj) => {  
          return (
            <Pad
              clip={audioObj.url}
              clipId={audioObj.id}
              keyCode={audioObj.keyCode}
              keyTrigger={audioObj.keyTrigger}
              power={this.props.power}
              updateDisplay={this.props.updateDisplay}
              key={audioObj.keyCode}
              tabindex={audioObj}
            />
          );
        });
      } 
      
      return <div className='pad-bank'>{padBank}</div>;
    }
  }