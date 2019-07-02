import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { setBio } from './actions/bioActions'
import store from './store'
import './App.css'

import Layout from './components/Layout/Layout'


class App extends Component {
  constructor() {
    super()

    this.state = {
      ready: false,
      loading: true,
      bio: {}
    }
  }

  componentDidMount() {
    store.dispatch(setBio())
  }

  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    )
  }
}

export default App
