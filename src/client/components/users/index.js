import React, { forwardRef } from 'react'
import './users.css'
import UserItem from './User-item'
import { Consumer } from '../../context'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'

const styles = {
  members: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    justifyItems: 'center',
    gridGap: '16px',
    maxWidth: '1248px',
    margin: '1rem auto'
  }
}

class Index extends React.Component {
  componentDidMount() {
    getUsers(this.props.value.dispatch)
    document.title = 'Users'
  }

  render = () => {
    const { classes, value } = this.props
    const users = value.users
    return (
      <div>
        <div className={classes.members}>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    )
  }
}

export function getUsers(dispatch) {
  axios
    .get('/api/users')
    .then(res => {
      dispatch({ type: 'GET_USERS', payload: res.data })
    })
    .catch(console.error)
}

const handler = (props, ref) => (
  <Consumer>{value => <Index {...props} value={value} ref={ref} />}</Consumer>
)

export default withStyles(styles)(forwardRef(handler))
