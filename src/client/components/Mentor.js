import React from 'react'

const Mentor = props => {
  const {first_name, last_name} = props.mentor

  return <div>
    <strong>First name: </strong>{first_name},&nbsp;
    <strong>Last name: </strong>{last_name}
  </div>
}

export default Mentor