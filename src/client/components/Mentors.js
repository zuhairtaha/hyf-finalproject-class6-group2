import Mentor from "./Mentor"
import React from "react"

class Mentors extends React.Component {

  state = {
    mentors: []
  }

  componentDidMount() {
    fetch('/api/mentors')
      .then(res => res.json())
      .then(mentors => this.setState({mentors}))
      .catch(console.log)
  }

  render = () => {
    const {mentors} = this.state
    return (
      <div className="container">
        <p>Next mentors list is comming from MySQL database</p>
        <div className="row">
          {mentors.map(mentor => <Mentor key={mentor.id} mentor={mentor} />)}
        </div>
      </div>
    )
  }
}

export default Mentors