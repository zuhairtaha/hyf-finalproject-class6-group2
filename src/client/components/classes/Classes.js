import React from 'react'
import Progress from '../layouts/Progress'
//import NavLink from 'react-router-dom/es/NavLink'
//import { Link } from 'react-router-dom'
import Class from './Classesveiw'
class Classes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classes: []
    }
  }
  deleteMentor(id) {
    this.setState(state => ({
      classes: [...state.classes.filter(state => state.id !== id)]
    }))

    fetch(`api/classes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  componentDidMount() {
    fetch('/api/classes')
      .then(res => res.json())
      .then(respons => {
        this.setState({ classes :respons })
        console.log(this.state.classes)
      })
      .catch(console.log)
  }

  render() {
    const { classes } = this.state
    console.log(classes)
    return (
      <div className="container">
        <h2>Classes </h2>
        {classes.length === 0 ? (
          <Progress />
        ) : (
          <div>
            {classes.map(classdata => (
              <div key={classdata.classid} className="col-md-6">
                 <div className="card shadow-sm mb-3">
                   <div className="card-body" />
                    <Class classdata={classdata} key={classdata.classid} />
                   </div>
                </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Classes
