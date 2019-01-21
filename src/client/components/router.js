import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './users'
import UserForm from './users/user-form'
import Calender from './_calender/Calender'
import ClassesCalender from './classes'
import AddClass from './classes/Add-class'
import Modules from './modules'
import Home from './pages/home/home'
import Form from './_form/Form'
import AddModule from './modules/Add-module'
import EditModule from './modules/edit-module'
import DeleteClass from './classes/DeleteClass'
import EditClass from './classes/Edit-class'
import AddModuleToClass from './classes/Add-module-to-class'
import Profile from "./users/Profile"

class Routers extends React.Component {
  render = () => (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/calender' component={Calender} />

      <Route path='/classes' component={ClassesCalender} exact />
      <Route path='/classes/add' component={AddClass} />
      <Route path='/classes/delete/:id' component={DeleteClass} />
      <Route path='/classes/edit/:id' component={EditClass} />
      <Route path='/classes/add-module/:id' component={AddModuleToClass} />

      <Route path='/modules' component={Modules} exact />
      <Route path='/modules/edit/:id' component={EditModule} />
      <Route path='/modules/add' component={AddModule} />

      <Route path='/users' component={Users} exact />
      <Route path='/users/add' component={UserForm.AddUser} />
      <Route path='/users/edit/:id' component={UserForm.EditUser} />
      <Route path='/users/:id' component={Profile} />

      <Route path='/form' component={Form} exact />

      <Route render={() => 'Page not found'} />
    </Switch>
  )
}

export default Routers
