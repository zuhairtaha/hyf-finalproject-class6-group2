import React, { Component, Fragment } from 'react'
import Navbar from "./components/layouts/Navbar"
import Jumbotron from "./components/layouts/Jumbotron"
import Mentors from "./components/mentors/Mentors"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddMentor from './components/mentors/AddMentor';
import EditMentor from './components/mentors/EditMentor';

class App extends Component {

  render = () =>
    <Fragment>
      <Navbar />
      <Jumbotron />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Mentors} exact />
          <Route path="/mentors/add" component={AddMentor} />
          <Route path={`/mentors/edit/:id`} component={EditMentor} />

          <Route render={() => "Page not found"} />

        </Switch>
      </BrowserRouter>
    </Fragment>
}

export default App
