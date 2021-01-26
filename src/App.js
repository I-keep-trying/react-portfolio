/* eslint-disable no-unused-vars */
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import {  Grid } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'
import routes from './config/paths'

const App = () => {
  return (
    <>
      <Grid
        minH="100vh"
        direction="column"
        align="center"
        justify="center"
      >
        <Header />
        <Router>
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
                    <div id="page" className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            )
          })}
        </Router>
        <Footer />
      </Grid>
    </>
  )
}

export default App
