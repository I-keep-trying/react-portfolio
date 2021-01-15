import React from 'react'
import { Route } from 'react-router-dom'

const Routes = (route) => (
  <Route
    path={route.path}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
)

export default Routes
