import React, { forwardRef } from 'react'
import Progress from '../layouts/Progress'
import ModuleItem from './Module-item'
import { Consumer } from '../../context'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    justifyItems: 'center',
    gridGap: '16px',
    maxWidth: '1248px',
    margin: '5rem auto'
  }
}

class Modules extends React.Component {
  componentWillMount() {
    getModules(this.props.value.dispatch)
    document.title = 'Modules'
  }

  render = () => {
    const {classes, value} = this.props
    const modules = value.modules
    return (
      <React.Fragment>
        { modules.length === 0 ? (
          <Progress/>
        ) : (
          <div className={ classes.root }>
            { modules.map(module => (
              <ModuleItem key={ module.id } module={ module }/>
            )) }
          </div>
        ) }
        {/*add module -------------------- */ }
        <div title='add module' className='floating-btn'>
          <Fab
            component={ Link }
            to='/modules/add'
            color='secondary'
            aria-label='Add'
          >
            <AddIcon/>
          </Fab>
        </div>
      </React.Fragment>
    )
  }
}


export function getModules(dispatch) {
  axios
    .get('/api/modules')
    .then(res => {
      dispatch({type: 'GET_MODULES', payload: res.data})
    })
    .catch(console.error)
}

const handler = (props, ref) => (
  <Consumer>{ value => <Modules { ...props } value={ value } ref={ ref }/> }</Consumer>
)

export default withStyles(styles)(forwardRef(handler))
