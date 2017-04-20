import React, { Component } from 'react'

class stopWatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsElapsed: 0,
      lastClearedIncrementer: null,
    }
    this.incrementer = null
    this.handleStartClick = this.handleStartClick.bind(this)
    this.handlePauseClick = this.handlePauseClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
  }

  handleStartClick() {
    console.log('handleStartClick')
    this.incrementer = setInterval(() =>
        this.setState({
          secondsElapsed: this.state.secondsElapsed + 1,
        })
      , 1000)
  }

  handlePauseClick() {
    console.log('handlePauseClick')
    clearInterval(this.incrementer)
    this.setState({
      lastClearedIncrementer: this.incrementer,
    })
  }

  handleResetClick() {
    console.log('handleResetClick')
    clearInterval(this.incrementer)
    this.setState({
      secondsElapsed: 0,
    })
  }

  render() {
    console.log('state', this.state)
    const { secondsElapsed } = this.state
    const arrowStyle = {
      transform: `rotate(${secondsElapsed * 6}deg)`,
    }
    return (
      <div className='watch-wrapper' >
        <div className='watch' >
          <img className='arrow' alt='arrow' style={arrowStyle}
            src='https://github.com/antoniocapelo/quickies/blob/master/analog-clock/images/secondHand.png?raw=true'
          />
        </div>
        {(this.state.secondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
            ? <button className='btn start-btn' onClick={this.handleStartClick} >Start</button>
            : <button className='btn stop-btn' onClick={this.handlePauseClick} >Pause</button>
        )}
        {(this.state.secondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
            ? <button className='btn' onClick={this.handleResetClick} >Stop</button>
            : null
        )}
      </div>
    )
  }
}

export default stopWatch
