import React from 'react'

export default class Pad extends React.Component{

    componentDidMount() {
        document.addEventListener('keydown', (e)=>this.handleKeyPress(e));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', (e)=>this.handleKeyPress(e));
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.playSound();
        }
    }
          

    playSound() {
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
    }

    render(props) {
        return(
            <button
                className='drum-pad'
                id={this.props.clipId}
                onClick={()=>{this.playSound()}}
                
            >
            <audio
            className='clip'
            id={this.props.keyTrigger}
            src={this.props.clip}
           
            />
            {this.props.keyTrigger}
        </button>
        )
    }
}