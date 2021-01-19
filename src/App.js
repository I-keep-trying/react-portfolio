import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Box } from '@chakra-ui/react'
//import Header from './components/Header'
import Header from './components/Header1'
import Footer from './components/Footer'
import './App.css'
import routes from './config/paths'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        {routes.map(({ path, Component }) => {
          return (
            <Route key={path} exact={path !== '*'} path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          )
        })}
      </Router>
      <Footer />
    </>
  )
}

export default App
