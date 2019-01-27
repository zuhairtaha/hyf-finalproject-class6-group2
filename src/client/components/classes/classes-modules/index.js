import React from 'react'
import Container from '../../layouts/container'
import axios from 'axios'
import swal from 'sweetalert'

class ClassModule extends React.Component {
  state = {
    id: '',
    class_id: '',
    class_name: '',
    github_page: '',
    length: '',
    module_id: '',
    module_title: '',
    start_date: '',
    end_date: ''
  }

  componentDidMount() {
    const classModuleId = parseInt(this.props.match.params.id)
    this.setState({ id: classModuleId })
    axios
      .get(`/api/classes-modules/${classModuleId}`)
      .then(res => {
        this.setState({ ...res.data })
        document.title = `${res.data.module_title} for ${res.data.class_name} `
      })
      .catch(err => swal('OOPS', err, 'error'))
  }

  render = () => {
    const {
      id,
      class_id,
      class_name,
      github_page,
      length,
      module_id,
      module_title,
      start_date,
      end_date
    } = this.state
    return (
      <Container>
        <h3>
          Module: {module_title} for class {class_name}
        </h3>
        <ul>
          <li>id:{' ' + id}</li>
          <li>class_id:{' ' + class_id}</li>
          <li>class_name:{' ' + class_name}</li>
          <li>github_page:{' ' + github_page}</li>
          <li>length:{' ' + length}</li>
          <li>module_id:{' ' + module_id}</li>
          <li>module_title:{' ' + module_title}</li>
          <li>start_date:{' ' + start_date}</li>
          <li>end_date:{' ' + end_date}</li>
        </ul>

        <p>
          <span role='img' aria-label='alert'>
            ⚠
          </span>
          ️ todo: show mentors, students, sessions, description... for this
          class_module
        </p>
      </Container>
    )
  }
}

export default ClassModule
