import * as React from 'react'
import { render } from 'react-dom'

import GPIO from './gpio/raspberry-pi/3'

class App extends React.Component {
  state = {
    pins: Array(42).fill(true)
  }
  
  onToggle = (id: number) => {
    console.log(id)
    const { pins } = this.state
    
    pins[id] = !pins[id]
    this.setState({
      pins
    })
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
