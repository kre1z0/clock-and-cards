import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className='wrapper'>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  state => ({

  }),
  { },
)(App)

App.propTypes = {
  children: PropTypes.element,
}
