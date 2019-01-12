import React from 'react'
import Progress from '../layouts/Progress'
import NavLink from 'react-router-dom/es/NavLink'
import './users.css'
import User from './User'
import { Consumer } from '../../context'

class Users extends React.Component {
  state = {
    users: []
  }

  componentWillMount() {
    document.title = 'Users'
  }

  render = () => {
    return (
      <Consumer>
        {value => {
          const { users } = value
          return (
            <div className='container'>
              <h2>
                Users{' '}
                <NavLink to='/users/add' className='btn btn-sm btn-success'>
                  <i className='fa fa-plus text-white' />
                </NavLink>
              </h2>
              {users.length === 0
                ? <Progress />
               : <div className='members mb-3'>
                {users.map(user => <User key={user.id} user={user} />)}
              </div>}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Users
