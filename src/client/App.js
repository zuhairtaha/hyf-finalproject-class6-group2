import React, {Component, Fragment} from 'react'
import Navbar from "./components/layouts/Navbar"
import Jumbotron from "./components/layouts/Jumbotron"
import Mentors from "./components/Mentors"

class App extends Component {

  render = () =>
    <Fragment>
      <Navbar />
      <Jumbotron />
      <Mentors />
    </Fragment>

}

export default App
