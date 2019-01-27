import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './users'
import UserForm from './users/user-form'
import Calender from './_calender/Calender'
import ClassesCalender from './classes'
import AddClass from './classes/Add-class'
import Modules from './modules'
import Index from './pages/home'
import Form from './_form/Form'
import AddModule from './modules/Add-module'
import EditModule from './modules/edit-module'
import EditClass from './classes/Edit-class'
import AddModuleToClass from './classes/classes-modules/Add-module-to-class'
import Profile from './users/Profile'
import EditClassModule from './classes/classes-modules/Edit-classe-module'
import ContactUs from './pages/contact-us'
import Apply from './pages/apply'
import About from './pages/about'

class Routers extends React.Component {
  render = () => (
    <Switch>
      <Route path='/' component={Index} exact />

      <Route
        path='/classes'
        render={props => <ClassesCalender {...props} />}
        exact
      />
      <Route path='/classes/add' component={AddClass} />
      <Route path='/classes/edit/:id' component={EditClass} />
      <Route path='/classes/add-module/:id' component={AddModuleToClass} />
      <Route path='/classes-modules/edit/:id' component={EditClassModule} />

      <Route path='/modules' render={props => <Modules {...props} />} exact />
      <Route path='/modules/edit/:id' component={EditModule} />
      <Route path='/modules/add' component={AddModule} />

      <Route path='/users' component={Users} exact />
      <Route path='/users/add' component={UserForm.AddUser} />
      <Route path='/users/edit/:id' component={UserForm.EditUser} />
      <Route path='/users/:id' component={Profile} />

      <Route path='/contact' component={ContactUs} exact />
      <Route path='/apply' component={Apply} exact />
      <Route path='/about' component={About} exact />

      {/*Temporary routes*/}
      <Route path='/form' component={Form} exact />
      <Route path='/calender' component={Calender} />

      <Route render={() => 'Page not found!'} />
    </Switch>
  )
}

export default Routers
