import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Mentors from './mentors/Mentors'
import MentorForms from "./mentor-form"
import Calender from './calender/Calender'
import ClassesCalender from './classes/Calender'
import AddClass from './_classes/AddClass'
import Classitem from './_classes/Classesveiw'
import Modules from './modules/Modules'
import ModuleForms from "./module-form"

class Main extends React.Component {
  render = _ =>
    <Switch>
      <Route path="/" component={ Calender } exact/>
      <Route path="/classes" component={ ClassesCalender } exact/>
      <Route path="/classes/add" component={ AddClass } exact/>
      <Route path="/classes/delete/:id" component={ Classitem } exact/>

<<<<<<< HEAD
      <Route path="/Modules" component={Modules} exact />
      <Route exact path="/Modules/add" component={ModuleForms.AddModule} />
      <Route exact path={`/Modules/edit/:id`} component={ModuleForms.EditModule} />
            <Route exact path="/Modules/addtoclass/:id" component={ModuleForms.AddtoClass} />
=======
      <Route path="/modules" component={ Modules } exact/>
      <Route exact path="/modules/add" component={ ModuleForms.AddModule }/>
      <Route exact path="/Modules/edit/:id" component={ ModuleForms.EditModule }/>
      <Route exact path="/modules/addtoclass" component={ ModuleForms.Addtoclass }/>
>>>>>>> master

      <Route path="/mentors" component={ Mentors } exact/>
      <Route exact path="/mentors/add" component={ MentorForms.AddMentor }/>
      <Route exact path="/mentors/edit/:id" component={ MentorForms.EditMentor }/>
      <Route exact path="/mentors/delete/:id" component={ MentorForms.EditMentor }/>

      <Route render={ () => 'Page not found' }/>

    </Switch>
}

export default Main