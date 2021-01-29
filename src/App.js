/* eslint-disable no-unused-vars */
import React from 'react'
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Grid } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import routes from './config/paths'
import './App.css'

const App = () => {
  return (
    <>
      <Grid direction="column" align="center">
        <BrowserRouter>
          <Header />

          <Switch>
            {routes.map(({ path, Component }) => {
              return (
                <Route key={path} exact={path !== '*'} path={path}>
                  {({ match }) => {
                    return (
                      <CSSTransition
                        in={match !== null}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                      >
                        <div className="page">
                          <Component />
                        </div>
                      </CSSTransition>
                    )
                  }}
                </Route>
              )
            })}
            <Route>
              <Error />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Grid>
    </>
  )
}

export default App
