import React from 'react'
import NavLink from "react-router-dom/es/NavLink"

class AddMentor extends React.Component {

  addMentorHandler = e => {
    e.preventDefault()
  }

  render = () =>
    <div className="container">
    <h3>Add mentor</h3>
      <div className="card shadow-sm p-3 mb-3">
        <form onSubmit={this.addMentorHandler}>

          <div className="row">
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="first_name" placeholder="First name" />
            </div>
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="last_name" placeholder="Last name" />
            </div>

            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="bday" placeholder="Birth date" />
            </div>
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="type" placeholder="type" />
            </div>

            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="github" placeholder="GitHub url" />
            </div>
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="admission_date" placeholder="Admission date" />
            </div>

          </div>

          <div className="form-group row">
            <div className="col-sm-1">Status</div>
            <div className="col-sm-11">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="status" id="status" />
                <label className="form-check-label" htmlFor="status">
                  Active
              </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            <i className="fa fa-plus" aria-hidden="true" /> Add mentor
        </button>
        <NavLink className="btn btn-light ml-3" to="/"><i className="fa fa-caret-left"></i> back</NavLink>
        </form>
      </div>
    </div>
}

export default AddMentor