import * as React from 'react'
import { render } from 'react-dom'

import GPIO from './gpio/raspberry-pi/3'

class App extends React.Component {
  state = {
    pins: [true, true]
  }
  
  onToggle = (id: number) => {
    console.log(id)
    const { pins } = this.state
    const pin = pins[id - 1]
    
    if (pin) {
      pins[id - 1] = !pin
      this.setState({
        pins
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <GPIO pins={this.state.pins} onToggle={this.onToggle.bind(this)} />
      </React.Fragment>
    )
  }
}

render(<App />, document.getElementById('root'))
