import React, { Component } from 'react'
import Navbar from './components/layouts/navbar/Navbar'
import Main from './components'
import { Provider } from './context'

class App extends Component {
  render = () => (
    <Provider>
      <Navbar />
      <Main />
    </Provider>
  )
}

export default App
