import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Mentors from './mentors/Mentors'
import AddMentor from './mentors/AddMentor'
import EditMentor from './mentors/EditMentor'

class Main extends React.Component {
  render = _ =>
    <Switch>
      <Route path="/" component={Mentors} exact />
      <Route path="/mentors/add" component={AddMentor} />
      <Route path={`/mentor/edit/:id`} component={EditMentor} />

      <Route render={() => 'Page not found'} />

    </Switch>
}

export default Main