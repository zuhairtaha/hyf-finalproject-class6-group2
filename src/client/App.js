import React, {Component} from 'react'
import Navbar from './components/layouts/Navbar'
import Jumbotron from './components/layouts/Jumbotron'
import Main from './components'
import Footer from './components/layouts/Footer'

class App extends Component {

  render = () =>
    <>
      <Navbar />
      <Jumbotron />
<<<<<<< HEAD
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Mentors} exact />
          <Route path="/mentors/add" component={AddMentor} />
          <Route path={`/mentors/edit/:id`} component={EditMentor} />

          <Route render={() => "Page not found"} />

        </Switch>
      </BrowserRouter>
    </Fragment>
=======
      <Main />
      <Footer />
    </>
>>>>>>> 346123fb819aca330870d795414af30ba2008ba8
}

export default App
