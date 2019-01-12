import React from 'react'
import Progress from '../layouts/Progress'
import NavLink from 'react-router-dom/es/NavLink'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

class Mentors extends React.Component {
  state = {
    mentors: []
  }

  deleteMentor(id) {
    this.setState(state => ({
      mentors: [...state.mentors.filter(state => state.id !== id)]
    }))

    axios.delete(`/api/mentors/${ id }`)
      .then(console.log)
      .catch(console.error)
  }

  componentDidMount() {
    // if (localStorage.getItem('mentors'))
    //   this.setState({mentors: JSON.parse(localStorage.getItem('mentors'))})
    // else
      axios
        .get('/api/mentors')
        .then(res => {
          this.setState({mentors: res.data})
          const mentors = JSON.stringify(res.data)
          localStorage.setItem('mentors', mentors)
        })
        .catch(console.log)
  }

  componentWillMount() {
    document.title = 'Mentors'
  }

  render = () => {
    const {mentors} = this.state
    return (
      <div className="container">
        <h2>
          Mentors{ ' ' }
          <NavLink to="/mentors/add" className="btn btn-sm btn-success">
            <i className="fa fa-plus text-white"/>
          </NavLink>
        </h2>
        { mentors.length === 0
          ? <Progress/>
          : <div className="row">
            { mentors.map(mentor => (
              <div key={ mentor.id } className="col-md-6">
                <div className="card shadow-sm mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      { mentor.first_name } { mentor.last_name }
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      { mentor.type }
                    </h6>
                    <p className="card-text">
                      Birth date: { moment(mentor.birth_date).format('DD-MM-YYYY') }
                      <br/>
                      Admission date: { moment(mentor.admission_date).format('DD-MM-YYYY') }
                    </p>
                    <a href={ mentor.slack_nickname } className="btn btn-info">
                      <i className="fa fa-github" aria-hidden="true">
                        { ' ' }
                      </i>{ ' ' }
                      Github
                    </a>
                    <Link
                      to={ `/mentors/edit/${ mentor.id }` }
                      className="btn btn-info mr-2 ml-2"
                    >
                      <i className="fa fa-pencil"/> Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={ () => this.deleteMentor(mentor.id) }
                    >
                      <i className="fa fa-trash"/>
                    </button>
                  </div>
                </div>
              </div>
            )) }
          </div>
        }
      </div>
    )
  }
}

export default Mentors
