import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Shevy from 'shevyjs'

const shevy = new Shevy()

ReactDOM.render(
  <BrowserRouter>
    <App shevy={shevy} />
  </BrowserRouter>,
  document.getElementById('root')
)
//https://github.com/JasonParra/React-Table-Semantic-UI really good responsive table example
