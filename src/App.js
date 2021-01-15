import React from 'react'
import { Switch } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import paths from './config/paths'
import MakeRoutes from './config/routes'

const App = (props) => {
  //console.log('props',props)
  return (
    <div>
      <Header />
      <Switch>
        {paths.map((path, index) => (
          <MakeRoutes key={index} {...path} />
        ))}
      </Switch>
    </div>
  )
}

export default App
