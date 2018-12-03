import React, {Component} from 'react'
import Mentor from "./components/Mentor"

class App extends Component {

  state = {
    mentors: []
  }

  componentDidMount() {
    fetch('/api/mentors')
      .then(res => res.json())
      .then(mentors => this.setState({mentors}))
      .catch(console.log)
  }

  render() {
    const {mentors} = this.state
    return (
      <div className="App">
        {mentors.map(mentor => <Mentor key={mentor.id} mentor={mentor} />)}
      </div>
    )
  }
}

export default App
