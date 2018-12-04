import Mentor from "./Mentor"
import React from "react"
import Progress from "./layouts/Progress"

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
        <h2>Mentors <span className="btn btn-xs btn-primary" href="add"><i class="fa fa-plus"></i> add mentor</span></h2>
        {mentors.length === 0
          ? <Progress />
          : <div className="row">
            {mentors.map(mentor => <Mentor key={mentor.id} mentor={mentor} />)}
          </div>
        }
      </div>
    )
  }
}

export default Mentors