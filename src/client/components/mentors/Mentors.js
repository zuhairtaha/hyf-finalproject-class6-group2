import Mentor from './Mentor'
import React from 'react'
import Progress from '../layouts/Progress'
import NavLink from "react-router-dom/es/NavLink"

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
        <h2>Mentors <NavLink to="/mentors/add" className="btn btn-sm btn-success"><i className="fa fa-plus text-white" /></NavLink></h2>       
        {mentors.length === 0
          ? <Progress />
          : <div className="row">
            {mentors.map(mentor => (
              <Mentor key={mentor.id} mentor={mentor} />
            ))}
          </div>
        }
      </div>
    )
  }
}

export default Mentors