import React, { Component } from 'react'
import Navbar from './components/layouts/Navbar'
//import Jumbotron from './components/layouts/Jumbotron'
import Main from './components'
import Footer from './components/layouts/Footer'

class App extends Component {

  render = () =>
    <>
      <Navbar />
     
      <Main />
      <Footer />
    </>
}

export default App
