import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './users/Users'
import UserForm from './users/user-form'
import ClassesCalender from './classes'
import AddClass from './_classes/AddClass'
import Modules from './modules'
import AddModule from './modules/Add-module'
import EditModule from './modules/edit-module'


import Home from './pages/home'
import Profile from './users/Profile'
import Form from "./_form/Form"
import Roles from './roles';

import Editrole from './roles/edit-role';
import AddRole from './roles/Add-role';

class Routers extends React.Component {
  render = () => (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/classes' component={ClassesCalender} />
      <Route path='/classes/add' component={AddClass} />

      <Route path='/modules' component={Modules} exact />
      <Route path='/modules/edit/:id' component={EditModule} exact />
      <Route path='/modules/add' component={AddModule} />

      <Route path='/roles' component={Roles} exact />
      <Route path='/roles/edit/:id' component={Editrole} exact />
      <Route path='/roles/add' component={AddRole} />

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
