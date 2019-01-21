import React from 'react'
import ModuleItem from './Module-item'
import { Consumer } from '../../context'
import './style.css'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'

class Modules extends React.Component {
  componentWillMount() {
    document.title = 'modules'
  }

  render = () => {
    return (
      <Consumer>
        {({ modules }) => (
          <div className={`modules`}>
            {modules.map(module => (
              <ModuleItem key={module.id} module={module} />
            ))}

            <div className='floating-btn'>
              <Fab component={Link} to='/modules/add' color='secondary' aria-label='Add'>
                <AddIcon />
              </Fab>
            </div>

          </div>
        )}
      </Consumer>
    )
  }
}

export default Modules
