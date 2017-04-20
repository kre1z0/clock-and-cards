import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './containers/App'
import Home from './views/HomeView'

const publicPath = '/'

export const routeCodes = {
  NEWS: `${publicPath}news`,
  FORM: `${publicPath}form`,
}

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route path={publicPath} component={App} >
          <IndexRoute component={Home} />
        </Route>
      </Router>
    )
  }
}
