import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Consumer } from '../../context'
import GithubIcon from 'mdi-material-ui/GithubCircle'
import LinkedinIcon from 'mdi-material-ui/Linkedin'
import MailIcon from '@material-ui/icons/Mail'
import axios from 'axios'
import './user.scss'

class UserItem extends React.Component {
  deleteUser = (id, dispatch) => {
    axios
      .delete(`/api/users/${id}`)
      .then(res => {
        if (res.data.deleted)
          return dispatch({
            type: 'DELETE_USER',
            payload: id
          })
      })
      .catch(console.error)
  }

  render() {
    const {
      id,
      avatar,
      name,
      role,
      summary,
      tags,
      slack_nickname,
      linkedin,
      email,
      type
    } = this.props.user
    return (
      <Consumer>
        {({ dispatch }) => (
          <Paper className='user'>
            <Link to={`/users/${id}`}>
              <div className='image'>
                {avatar ? (
                  <div className='shine zoomIn1'>
                    <figure>
                      <img
                        alt={name}
                        src={
                          type === 'alumni' ? '/images/users/' + avatar : avatar
                        }
                      />
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
            </Link>

            <Link to={`/users/${id}`} className='userAnchor'>
              <h3 className='userName'>{name}</h3>
            </Link>
            <span>{type}</span>
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
                <IconButton href={slack_nickname}>
                  <GithubIcon />{' '}
                </IconButton>
              )}
              {linkedin && (
                <IconButton href={linkedin}>
                  <LinkedinIcon />{' '}
                </IconButton>
              )}
              {email && (
                <IconButton href={email}>
                  <MailIcon />{' '}
                </IconButton>
              )}

              <IconButton component={Link} to={`/users/edit/${id}`}>
                <EditIcon />
              </IconButton>

              <IconButton
                onClick={() => this.deleteUser(id, dispatch)}
                aria-label='Delete'
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </Paper>
        )}
      </Consumer>
    )
  }
}

export default UserItem
