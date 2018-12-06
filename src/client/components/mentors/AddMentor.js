import React from 'react'
import NavLink from "react-router-dom/es/NavLink"

class AddMentor extends React.Component {
  constructor(props) {
    super(props)
        this.state = {
            mentorData: {
              "id" : "13",
              "first_name": "",
              "last_name": "",
              "bday": "",
              "type": "Mentor",
              "slack_nickname": "ttps://github.com/a-magdy",
              "admission_date": "",
              "status": ""
            }

        }
        //this.updateField = this.updateField.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }

 // addMentorHandler = e => {
   // e.preventDefault()
  //}
  updateField = (e) => {
    const { name,value } = e.target;
    //const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
        mentorData: {
            ...this.state.mentorData,
            [name]: value,
        }
    })
}


  submitForm = (e) => {
    e.preventDefault();

     let   url = '/api/mentors'
      let  method = 'POST';
      fetch(url, {
    method,
    body: JSON.stringify(this.state.mentorData),
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.text())
    .then(response => {
        console.log('Success:', response)
        // TODO redirect to the Mentors list page (/Mentors)
    })
    .catch(error => console.error('Error:', error));
}
  render = () =>
  <form onSubmit={this.submitForm}>
    <div className="container">
    <h3>Add mentor</h3>
      <div className="card shadow-sm p-3 mb-3">
        <form onSubmit={this.addMentorHandler}>

          <div className="row">
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="first_name" placeholder="First name" value={this.state.mentorData.first_name} onChange={this.updateField} />
            </div>
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="last_name" placeholder="Last name" value={this.state.mentorData.last_name} onChange={this.updateField} />
            </div>

            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="bday" placeholder="Birth date" value={this.state.mentorData.bday} onChange={this.updateField} />
            </div>
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="type" placeholder="type" value={this.state.mentorData.type} onChange={this.updateField} />
            </div>

            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="github" placeholder="GitHub url" value={this.state.mentorData.slack_nickname} onChange={this.updateField}/>
            </div>
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="admission_date" placeholder="Admission date" value={this.state.mentorData.admission_date} onChange={this.updateField}/>
            </div>

          </div>

          <div className="form-group row">
            <div className="col-sm-1">Status</div>
            <div className="col-sm-11">
              <div className="form-check">
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
    </form>
}

export default AddMentor