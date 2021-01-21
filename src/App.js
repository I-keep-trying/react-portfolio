/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { Box } from '@chakra-ui/react'
import Header1 from './components/Header'
import Footer from './components/Footer'

import './App.css'
import routes from './config/paths'

const App = () => {
  return (
    <>
      <Router>
        <Header1 />
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
                  <Box id="page" className="page">
                    <Component />
                    <Footer />
                  </Box>
                </CSSTransition>
              )}
            </Route>
          )
        })}
      </Router>
    </>
  )
}

export default App
