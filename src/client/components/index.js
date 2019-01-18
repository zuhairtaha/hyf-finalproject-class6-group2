import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './users/Users'
import UserForm from './users/user-form'
import ClassesCalender from './classes/Calender'
import AddClass from './_classes/AddClass'
import Modules from './modules'
import AddModule from './modules/Add-module'
import EditModule from './modules/edit-module'


//import ModuleForms from './modules/module-form'
import Home from './pages/home'
import Profile from './users/profile'
import Form from "./form/Form"

class Routers extends React.Component {
  render = () => (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/classes' component={ClassesCalender} />
      <Route path='/classes/add' component={AddClass} />

      <Route path='/modules' component={Modules} exact />
      <Route path='/modules/edit/:id' component={EditModule} exact />
      <Route path='/modules/add' component={AddModule} />

      <Route path='/users' component={Users} exact />
      <Route path='/users/add' component={UserForm.AddUser} />
      <Route path='/users/edit/:id' component={UserForm.EditUser} />
      <Route path='/users/:id' render={() => <Profile />} />
      <Route path='/profile' render={() => <Profile />} />
        <Route path='/form' component={Form} exact />

      <Route render={() => 'Page not found'} />
    </Switch>
  )
}

export default Routers
