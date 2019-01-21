import React from 'react'
import './users.css'
import UserItem from './User-item'
import { Consumer } from '../../context'

import { withStyles } from '@material-ui/core/styles'
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
  componentWillMount() {
    document.title = 'Users'
  }

  render = () => {
    const { classes } = this.props
    return (
      <Consumer>
        {({ users }) => (
          <div>
            <div className={classes.members}>
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

export default withStyles(styles)(Index)
