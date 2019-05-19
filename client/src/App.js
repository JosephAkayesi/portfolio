import React, { Component } from 'react'
import classnames from 'classnames'
import { Provider } from 'react-redux'
import { setBio } from './actions/bioActions'
import store from './store'
import './App.css'

import Description from './components/Description/Description'
import Social from './components/Social/Social'

class App extends Component {
  constructor() {
    super()

    this.state = {
      ready: false,
      bio: {}
    }
  }

  componentDidMount() {
    store.dispatch(setBio())
    setTimeout(() => { this.setState({ ready: true }) }, 500)
  }

  render() {
    const { bio } = store.getState().bio
    return (
      <Provider store={store}>
        <div className={classnames('app', { ready: this.state.ready })}>
          <div className="appDescription">
            <Description bio={bio} />
          </div>
          <div className="appSocial">
            <Social bio={bio} />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
