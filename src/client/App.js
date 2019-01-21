import React, { Component } from 'react'
import Navbar from './components/layouts/navbar/Navbar'

import Routers from './components/router'
import { Provider } from './context'

class App extends Component {
  render = () => (
    <Provider>
      <Navbar />
      <Routers />
    </Provider>
  )
}

export default App
