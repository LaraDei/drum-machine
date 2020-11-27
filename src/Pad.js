import React from 'react'

export default class Pad extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          padStyle: {
            backgroundColor: 'grey',
            marginTop: 10,
            boxShadow: '3px 3px 5px black'
          }
        }
    }
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
          
    activatePad() {
        if (this.props.power) {
            if (this.state.padStyle.backgroundColor === 'green') {
            this.setState({
                padStyle: {
                    backgroundColor: 'grey',
                    marginTop: 10,
                    boxShadow: '3px 3px 5px black'
                  }
            });
            } else {
            this.setState({
                padStyle: {
                    backgroundColor: 'green',
                    boxShadow: '0 3px green',
                    height: 75,
                    marginTop: 13
                  }
            });
            }
        } else if (this.state.padStyle.marginTop === 13) {
            this.setState({
            padStyle: {
                backgroundColor: 'grey',
                marginTop: 10,
                boxShadow: '3px 3px 5px black'
              }
            });
        } else {
            this.setState({
            padStyle: {
                height: 75,
                marginTop: 13,
                backgroundColor: 'grey',
                boxShadow: '0 3px grey'
            }
            });
        }
    }

    playSound() {
        const sound = document.getElementById(this.props.keyTrigger);
        console.log(sound)
        sound.currentTime = 0;
        sound.play();
        this.activatePad();
        setTimeout(() => this.activatePad(), 200);
        this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
    }

    render(props) {
        return(
            <div
                className='drum-pad'
                id={this.props.clipId}
                onClick={()=>{this.playSound()}}
                style={this.state.padStyle}
            >
            <audio
            className='clip'
            id={this.props.keyTrigger}
            src={this.props.clip}
           
            />
            {this.props.keyTrigger}
        </div>
        )
    }
}