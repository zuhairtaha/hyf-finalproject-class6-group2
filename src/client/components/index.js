import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Mentors from './mentors/Mentors'
import MentorForms from "./mentor-form";
import Calender from './calender/Calender'
import Classes from './classes/Classes';
import AddClass from './classes/AddClass';
import Classitem from './classes/Classesveiw'
class Main extends React.Component {
  render = _ =>
    <Switch>
      <Route path="/" component={Calender} exact />
      <Route path="/Classes" component={Classes} exact />
      <Route path="/Classes/add" component={AddClass} exact />
      <Route path={"/Classes/delete/:id"} component={Classitem} exact />

      <Route path="/Mentors" component={Mentors} exact />
      <Route exact path="/Mentors/add" component={MentorForms.AddMentor} />
      <Route exact path={`/Mentors/edit/:id`} component={MentorForms.EditMentor} />
      <Route exact path={`/Mentors/delete/:id`} component={MentorForms.EditMentor} />

      <Route render={() => 'Page not found'} />

    </Switch>
}

export default Main