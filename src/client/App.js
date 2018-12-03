import React, {Component} from 'react'

class App extends Component {


  componentDidMount() {
    fetch('/api/hello')
      .then(res => res.json())
      .then(console.log)
      .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        test
      </div>
    )
  }
}

export default App
