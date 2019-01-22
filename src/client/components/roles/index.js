import React, { forwardRef } from 'react'
import Progress from '../layouts/Progress'
import RoleItem from './Role-item'
import { Consumer } from '../../context'
import axios from 'axios'

class Roles extends React.Component {
  componentWillMount() {
    getRoles(this.props.value.dispatch)
    document.title = 'roles'
  }

  render = () => {
    const { roles } = this.props.value
    return (
      <div className='container'>
        {roles.length === 0 ? (
          <Progress />
        ) : (
          <div className='members mb-3'>
            {roles.map(role => (
              <RoleItem key={role.id} role={role} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export function getRoles(dispatch) {
  axios
    .get('/api/roles')
    .then(res => {
      dispatch({ type: 'GET_ROLES', payload: res.data })
    })
    .catch(console.error)
}

const handler = (props, ref) => (
  <Consumer>{value => <Roles {...props} value={value} ref={ref} />}</Consumer>
)

export default forwardRef(handler)
