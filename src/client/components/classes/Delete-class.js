import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class DeleteClass extends Component {
  state = {
    deleted: false,
    errorMessage: ''
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios
      .delete(`/api/classes/${id}`)
      .then(res => {
        this.props.history.push('/classes')
        return this.setState({ deleted: res.data.deleted })
      })
      .catch(res => this.setState({ errorMessage: res.message }))
  }

  render() {
    const { deleted, errorMessage } = this.state
    return deleted ? <></> : <p>{errorMessage}</p>
  }
}

export default withRouter(DeleteClass)
