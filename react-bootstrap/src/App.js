import './App.css'
import { Button } from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const header = (props) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>Are you okay?, { props.response }</p>
    </div>
  )
}

const App = () => {

  const name = "Imin"
  const response = "Yes!"

  return (
    <div className="App">
    {
        header({ name, response })
    }
    <Button varian="primary">Hello</Button>
    </div>
  )
}

export default App
