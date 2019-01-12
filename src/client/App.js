import React, { Component } from 'react'
import Navbar from './components/layouts/navbar/Navbar'
//import Jumbotron from './components/layouts/Jumbotron'
import Main from './components'
import { Provider } from "./context"
// import Footer from './components/layouts/Footer'

class App extends Component {
  render = () => (
    <Provider>
      <Navbar />
      <Main />

      {/*<Footer />*/}
    </Provider>
  )
}

export default App
