import React from 'react'
import './users.css'
import UserItem from './User-item'
import { Consumer } from '../../context'

class Index extends React.Component {
  componentWillMount() {
    document.title = 'Users'
  }

  render = () => {
    return (
      <Consumer>
        {({ users }) => (
          <div className='container'>
            {/*<h2>*/}
            {/*Users{' '}*/}
            {/*<NavLink to='/users/add' className='btn btn-sm btn-success'>*/}
            {/*<i className='fa fa-plus text-white' />*/}
            {/*</NavLink>*/}
            {/*</h2>*/}
            <div className='members mb-3'>
              {users.map(user => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
          </div>
        )}
      </Consumer>
    )
  }
}

export default Index
