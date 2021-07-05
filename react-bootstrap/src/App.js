import './App.css'
import { Button } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const header = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>Are you okay?, { props.response }</p>
      <h3 id="text">{' '}</h3>
    </div>
  )
}

const App = () => {
  
  const name = "Imin"
  const response = "Click the button!"
  
  const btnHello = () => {
    const text = document.getElementById('text')
    text.innerHTML = `${name} say Yes!`
  }

  return (
    <div className="App">
      {
        header({ name, response })
      }
      <Button varian="primary" onClick={btnHello}>Yes!</Button>
    </div>
  )
}

export default App
