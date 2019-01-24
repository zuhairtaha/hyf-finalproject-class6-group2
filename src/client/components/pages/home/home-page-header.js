import React from 'react'
import logBackground from './logo-bg.svg'
import Button from '@material-ui/core/es/Button/Button'
import TouchIcon from '@material-ui/icons/TouchApp'

const root = {
  textAlign: 'right',
  marginBottom: '-5rem'
}

const container = {
  minWidth: 275,
  maxWidth: 1200,
  width: '100%',
  height: 'auto',
  display: 'flex',
  margin: 'auto'
}

const left = {
  flex: 1,
  textAlign: 'left'
}

const right = {
  flex: 1,
  display: 'flex',
  background: `url(${logBackground}) no-repeat center`,
  minHeight: '500px'
}

const mainTitle = {
  margin: 'auto',
  textAlign: 'center',
  color: '#585858',
  lineHeight: '38px',
  fontWeight: '100'
}
const copenhagen = {
  fontWeight: 'bold',
  color: '#1d5896'
}

const HomePageHeader = () => {
  return (
    <div style={root}>
      <div style={container}>
        <div style={left}>
          <h1 style={{ color: '#1d5896', fontWeight: 'bold' }}>
            HackYourFuture
          </h1>
          <p style={{ lineHeight: '2rem', color: '#555', fontWeight: '100' }}>
            HackYourFuture is an educational program that aims to train refugees
            and asylum seekers to become web-developers and empower them by
            opening the doors to a very in-demand job market. In our free
            6-month program we train refugees, asylum seekers and people with
            limited access to further education in modern JavaScript software
            development. Our aim is to have our students land their first
            software development job after finishing our course. We achieve this
            by not only teaching them relevant frameworks, but also by preparing
            them for a job market that requires independent problem solving and
            continuous self-development. After completion of our program we
            guide students towards work via our network. With our team of
            experienced professional developers we have created a curriculum
            around the needs of non-western students. Our teachers are all
            volunteers and extremely passionate about coding. We believe
            talented refugees are a great opportunity for society and we are
            here to give them a helping hand to make use of their potential.
          </p>
        </div>
        <div style={right}>
          <h3 style={mainTitle}>
            REFUGEE CODE SCHOOL IN <br />
            <span style={copenhagen}>COPENHAGEN</span>
            <br />
            <Button
              style={{ marginTop: '1.5rem' }}
              size='large'
              variant='extendedFab'
              color='primary'
            >
              <TouchIcon />
              apply now
            </Button>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default HomePageHeader
