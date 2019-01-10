import React from 'react'
import Progress from '../layouts/Progress'
import NavLink from 'react-router-dom/es/NavLink'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './users.css'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

class Users extends React.Component {
  state = {
    users: []
  }

  deleteUser(id) {
    this.setState(state => ({
      users: [...state.users.filter(state => state.id !== id)]
    }))

    axios
      .delete(`/api/users/${id}`)
      .then(console.log)
      .catch(console.error)
  }

  componentDidMount() {
    // if (localStorage.getItem('users'))
    //   this.setState({users: JSON.parse(localStorage.getItem('users'))})
    // else
    axios
      .get('/api/users')
      .then(res => {
        this.setState({ users: res.data })
        const users = JSON.stringify(res.data)
        localStorage.setItem('users', users)
      })
      .catch(console.log)
  }

  componentWillMount() {
    document.title = 'Users'
  }

  render = () => {
    const { users } = this.state
    return (
      <div className='container'>
        <h2>
          Users{' '}
          <NavLink to='/users/add' className='btn btn-sm btn-success'>
            <i className='fa fa-plus text-white' />
          </NavLink>
        </h2>
        {users.length === 0 ? (
          <Progress />
        ) : (
          <div className='members mb-3'>
            {users.map(user => {
              const {
                id,
                avatar,
                github,
                name,
                role,
                summary,
                tags,
                slack_nickname,
                linkedin,
                email,
                type
              } = user
              return (
                <Paper key={id} className='user'>
                  <div className='image'>
                    {avatar ? (
                      <div className='shine zoomIn1'>
                        <figure>
                          <a href={github}>
                            <img
                              alt={name}
                              src={
                                type === 'alumni'
                                  ? '/images/users/' + avatar
                                  : avatar
                              }
                            />
                          </a>
                        </figure>
                      </div>
                    ) : (
                      <img
                        alt={name}
                        className='defaultPhoto'
                        src={'/images/avatar.png'}
                      />
                    )}
                  </div>
                  <h3 className='userName'>{name}</h3>
                  {role && <p className='memberRole'>{role}</p>}
                  {summary && <p>{summary}</p>}
                  {tags && (
                    <p>
                      {tags.map(tag => (
                        <span className='tag'>{tag}</span>
                      ))}
                    </p>
                  )}

                  <div className='socialIcons'>
                    {slack_nickname && (
                      <IconButton
                        className='btn btn-outline-info mb-2'
                        href={slack_nickname}
                      >
                        <i className='fa fa-github' aria-hidden='true'>
                          {' '}
                        </i>
                      </IconButton>
                    )}
                    {linkedin && (
                      <IconButton
                        className='btn btn-outline-info mb-2'
                        href={linkedin}
                      >
                        <i className='fa fa-linkedin' aria-hidden='true'>
                          {' '}
                        </i>
                      </IconButton>
                    )}
                    {email && (
                      <IconButton
                        className='btn btn-outline-info mb-2'
                        href={email}
                      >
                        <i className='fa fa-envelope-o' aria-hidden='true'>
                          {' '}
                        </i>
                      </IconButton>
                    )}

                    <IconButton component={Link} to={`/users/edit/${id}`}>
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      onClick={_ => this.deleteUser(id)}
                      aria-label='Delete'
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </Paper>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default Users
