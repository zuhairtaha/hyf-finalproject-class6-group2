import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Mentors from './mentors/Mentors'
import MentorForms from "./mentor-form";
import Calender from './calender/Calender'
import Classes from './classes/Classes';
class Main extends React.Component {
  render = _ =>
    <Switch>
      <Route path="/" component={Calender} exact />
      <Route path="/Classes" component={Classes} exact />

      <Route path="/Mentors" component={Mentors} exact />
      <Route exact path="/Mentors/add" component={MentorForms.AddMentor} />
      <Route exact path={`/Mentors/edit/:id`} component={MentorForms.EditMentor} />
      <Route exact path={`/Mentors/delete/:id`} component={MentorForms.EditMentor} />

      <Route render={() => 'Page not found'} />

    </Switch>
}

export default Main