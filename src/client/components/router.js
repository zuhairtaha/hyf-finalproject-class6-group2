import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './users'
import UserForm from './users/user-form'
<<<<<<< HEAD:src/client/components/index.js
import ClassesCalender from './classes/Calender'
import AddClass from './_classes/AddClass'
import Modules from './modules'
import AddModule from './modules/Add-module'
import EditModule from './modules/edit-module'


import Home from './pages/home'
import Profile from './users/profile'
import Form from "./form/Form"
import Roles from './roles';

import Editrole from './roles/edit-role';
import AddRole from './roles/Add-role';

=======
import Calender from './_calender/Calender'
import ClassesCalender from './classes'
import AddClass from './classes/Add-class'
import Modules from './modules'
import Home from './pages/home'
import Profile from './users/Profile'
import Form from './_form/Form'
import AddModule from './modules/Add-module'
import EditModule from './modules/edit-module'
import DeleteClass from './classes/DeleteClass'
import EditClass from './classes/Edit-class'
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c:src/client/components/router.js
class Routers extends React.Component {
  render = () => (
    <Switch>
      <Route path='/' component={Home} exact />
<<<<<<< HEAD:src/client/components/index.js
      <Route path='/classes' component={ClassesCalender} />
=======
      <Route path='/calender' component={Calender} />

      <Route path='/classes' component={ClassesCalender} exact />
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c:src/client/components/router.js
      <Route path='/classes/add' component={AddClass} />
      <Route path='/classes/delete/:id' component={DeleteClass} />
      <Route path='/classes/edit/:id' component={EditClass} />

      <Route path='/modules' component={Modules} exact />
<<<<<<< HEAD:src/client/components/index.js
      <Route path='/modules/edit/:id' component={EditModule} exact />
      <Route path='/modules/add' component={AddModule} />

      <Route path='/roles' component={Roles} exact />
      <Route path='/roles/edit/:id' component={Editrole} exact />
      <Route path='/roles/add' component={AddRole} />
=======
      <Route path='/modules/edit/:id' component={EditModule} />
      <Route path='/modules/add' component={AddModule} />
>>>>>>> c615c6b42c8965381ff5e707618c3a82ee8f889c:src/client/components/router.js

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
