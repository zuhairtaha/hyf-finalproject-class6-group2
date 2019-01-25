import axios from 'axios'
import swal from 'sweetalert'

async function getProfileInfo() {
  return await axios
    .post('/api/profile', {
      withCredentials: true
    })
    .catch(err => {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const { data, status, headers } = err.response
        console.log(data, status, headers)
      } else if (err.request) {
        // The request was made but no response was received
        throw new Error('Posting error! ' + err.request)
      } else {
        // Something happened in setting up the request that triggered an err
        throw new Error('Posting error! ' + err.response)
      }
      console.log(err.config)
    })
}

async function isLoggedIn() {
  const response = await axios
    .post('/api/profile')
    .catch(err => {
      swal('OOPS!', `Check your database connection..
      ${err.message}`, 'error')
    })
    .then(res => {
      // This checks if the user exists in our database. And returns a bool accordingly
      if (res) return 'id' in res.data
    })
  return await response
}

export { getProfileInfo, isLoggedIn }
