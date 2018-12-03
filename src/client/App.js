import React, {Component} from 'react'

class App extends Component {

  state = {
    mentors: []
  }

  componentDidMount() {
    fetch('/api/hello')
      .then(res => res.json())
      .then(mentors => this.setState({mentors}))
      .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state.mentors)}
      </div>
    )
  }
}

export default App
