import React from 'react'
import Pad from './Pad'

export default class PadBank extends React.Component {
  
    render() {
      let padBank;
      if (this.props.power) {
        padBank = this.props.currentPadBank.map((drumObj) => {  
          return (
            <Pad
              clip={drumObj.url}
              clipId={drumObj.id}
              keyCode={drumObj.keyCode}
              keyTrigger={drumObj.keyTrigger}
              power={this.props.power}
              updateDisplay={this.props.updateDisplay}
              key={drumObj.keyCode}
              tabindex={drumObj}
            />
          );
        });
      } 
      
      return <div className='pad-bank'>{padBank}</div>;
    }
  }