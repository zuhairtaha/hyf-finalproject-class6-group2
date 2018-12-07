import React, {Component} from 'react'
import Navbar from './components/layouts/Navbar'
import Jumbotron from './components/layouts/Jumbotron'
import Main from './components'

class App extends Component {

  render = () =>
    <>
      <Navbar />
      <Jumbotron />
      <Main />
    </>
}

export default App
