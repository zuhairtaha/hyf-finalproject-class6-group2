import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './users/Users'
import MentorForms from './users/user-form'
import Calender from './calender/Calender'
import ClassesCalender from './classes/Calender'
import AddClass from './_classes/AddClass'
import Modules from './modules/Modules'
import ModuleForms from './modules/module-form'
import Login from './users/login'

class Main extends React.Component {
  render = () => (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/calender' component={Calender} />
      <Route path='/classes' component={ClassesCalender} />
      <Route path='/classes/add' component={AddClass} />

      <Route path='/modules' component={Modules} />
      <Route path='/modules/add' component={ModuleForms.AddModule} />
      <Route path='/modules/edit/:id' component={ModuleForms.EditModule} />
      <Route path='/modules/addtoclass' component={ModuleForms.Addtoclass} />

      <Route path='/users' component={Users} />
      <Route path='/users/add' component={MentorForms.AddMentor} />
      <Route path='/users/edit/:id' component={MentorForms.EditMentor} />

      <Route render={() => 'Page not found'} />
    </Switch>
  )
}

export default Main
