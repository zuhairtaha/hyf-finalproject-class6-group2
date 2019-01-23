import React, { Component } from 'react'
import Navbar from './components/layouts/navbar/Navbar'
import Routers from './components/router'
import { Provider } from './context'
import SnackbarAlert from "./components/layouts/Snackbar-alert"
class App extends Component {
  render = () => (
    <Provider>
      <Navbar />
      <Routers />
      <SnackbarAlert open={true} message='test' />
    </Provider>
  )
}

export default App
