import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import { Link } from 'react-router-dom'

const AddClassButton = () => {
  return (
    <div className='floating-btn'>
      <Fab
        component={Link}
        to='/classes/add'
        color='secondary'
        aria-label='Add'
      >
        <AddIcon />
      </Fab>
    </div>
  )
}

export default AddClassButton
