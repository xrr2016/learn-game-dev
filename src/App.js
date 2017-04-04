import React, { Component } from 'react'
import logo from './logo.svg'
import { Button } from 'antd'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler () {
    window.alert('Clicked!')
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
          <br />
          <br />
          <Button type='primary' size='small'>Primary</Button>
          <Button type='primary' size='large'>Primary</Button>
          <br />
          <br />
          <Button type='danger' onClick={this.clickHandler}>Danger</Button>
          <Button type='danger' shape='circle'>Danger</Button>
          <br />
          <br />
          <Button type='dashed'>Dashed</Button>
          <Button type='dashed' ghost>Dashed</Button>
        </p>
      </div>
    )
  }
}

export default App
