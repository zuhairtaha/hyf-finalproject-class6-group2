import React from 'react'
import './users.css'
import UserItem from './User-item'
import { Consumer } from '../../context'

class Index extends React.Component {
  componentWillMount() {
    document.title = 'Users'
  }

  render = () => {
    return <Consumer>
        {({ users }) => <div className='container'>
            <div className='members mb-3'>
              {users.map(user => <UserItem key={user.id} user={user} />)}
            </div>
          </div>}
      </Consumer>
  }
}

export default Index
