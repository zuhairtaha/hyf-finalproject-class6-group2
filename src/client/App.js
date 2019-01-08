import React, { Component } from 'react'
import Navbar from './components/layouts/Navbar'
//import Jumbotron from './components/layouts/Jumbotron'
import Main from './components'
// import Footer from './components/layouts/Footer'
import Auth from './components/auth/containers/App'
class App extends Component {

  render = () =>
    <>
      <Navbar />
      <Auth />
      {/*<Main />*/}
      {/*<Footer />*/}
    </>
}

export default App
