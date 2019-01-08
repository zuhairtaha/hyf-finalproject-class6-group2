import React from 'react'
import Progress from '../layouts/Progress'
import NavLink from 'react-router-dom/es/NavLink'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './mentors.css'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'


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
          : <div className="members mb-3">
            { mentors.map(mentor => (


              <Paper key={ mentor.id } className='user'>
                <div className="image">
                  { mentor.avatar
                    ? <div className="shine zoomIn1">
                      <figure>
                        <a href={ mentor.github }>
                          <img src={ mentor.role === 'alumni'
                            ? '/images/alumni/' + mentor.avatar
                            : mentor.avatar }/>
                        </a>
                      </figure>
                    </div>
                    : <img className="defaultPhoto" src={ '/images/avatar.png' }/>
                  }
                </div>
                <h3 className="userName">
                  { mentor.first_name + mentor.last_name }
                </h3>
                { mentor.role && <p className="memberRole">{ mentor.role }</p> }
                { mentor.summary && <p>{ mentor.summary }</p> }
                { mentor.tags && <p>{ mentor.tags.map(tag => <span className="tag">{ tag }</span>) }</p> }

                <div className="socialIcons">
                  { mentor.slack_nickname && (
                    <IconButton className="btn btn-outline-info mb-2" href={ mentor.slack_nickname }>
                      <i className="fa fa-github" aria-hidden="true"> </i>
                    </IconButton>
                  ) }
                  { mentor.linkedin && (
                    <IconButton className="btn btn-outline-info mb-2" href={ mentor.linkedin }>
                      <i className="fa fa-linkedin" aria-hidden="true"> </i>

                    </IconButton>
                  ) }
                  { mentor.email && (
                    <IconButton className="btn btn-outline-info mb-2" href={ mentor.email }>
                      <i className="fa fa-envelope-o" aria-hidden="true"> </i>

                    </IconButton>
                  ) }


                  <IconButton component={ Link } to={ `/mentors/edit/${ mentor.id }` }>
                    <EditIcon/>
                  </IconButton>

                  <IconButton onClick={ () => this.deleteMentor(mentor.id) } aria-label="Delete">
                    <DeleteIcon/>
                  </IconButton>


                </div>


              </Paper>


            )) }
          </div>
        }
      </div>
    )
  }
}

export default Mentors
