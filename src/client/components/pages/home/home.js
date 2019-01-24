import React from 'react'
import Container from '../../layouts/container'
import '../../layouts/background-shapes/shape.css'
import Layout from "../../layouts"
import HomePageHeader from "./home-page-header"

// import Parallax from './parallax'

class Home extends React.Component {
  componentDidMount() {
    document.title = 'HackYourFuture Copenhagen'
  }

  render = () => (
    <Layout>
      <HomePageHeader/>
      <Container>
        <p>
          In our free 6-month program we train refugees, asylum seekers and
          people with limited access to further education in modern JavaScript
          software development. Our aim is to have our students land their first
          software development job after finishing our course. We achieve this
          by not only teaching them relevant frameworks, but also by preparing
          them for a job market that requires independent problem solving and
          continuous self-development. After completion of our program we guide
          students towards work via our network. With our team of experienced
          professional developers we have created a curriculum around the needs
          of non-western students. Our teachers are all volunteers and extremely
          passionate about coding.
        </p>
        <p>
          We believe talented refugees are a great opportunity for society and
          we are here to give them a helping hand to make use of their
          potential.
        </p>
      </Container><Container>
        <p>
          In our free 6-month program we train refugees, asylum seekers and
          people with limited access to further education in modern JavaScript
          software development. Our aim is to have our students land their first
          software development job after finishing our course. We achieve this
          by not only teaching them relevant frameworks, but also by preparing
          them for a job market that requires independent problem solving and
          continuous self-development. After completion of our program we guide
          students towards work via our network. With our team of experienced
          professional developers we have created a curriculum around the needs
          of non-western students. Our teachers are all volunteers and extremely
          passionate about coding.
        </p>
        <p>
          We believe talented refugees are a great opportunity for society and
          we are here to give them a helping hand to make use of their
          potential.
        </p>
      </Container><Container>
        <p>
          In our free 6-month program we train refugees, asylum seekers and
          people with limited access to further education in modern JavaScript
          software development. Our aim is to have our students land their first
          software development job after finishing our course. We achieve this
          by not only teaching them relevant frameworks, but also by preparing
          them for a job market that requires independent problem solving and
          continuous self-development. After completion of our program we guide
          students towards work via our network. With our team of experienced
          professional developers we have created a curriculum around the needs
          of non-western students. Our teachers are all volunteers and extremely
          passionate about coding.
        </p>
        <p>
          We believe talented refugees are a great opportunity for society and
          we are here to give them a helping hand to make use of their
          potential.
        </p>
      </Container><Container>
        <p>
          In our free 6-month program we train refugees, asylum seekers and
          people with limited access to further education in modern JavaScript
          software development. Our aim is to have our students land their first
          software development job after finishing our course. We achieve this
          by not only teaching them relevant frameworks, but also by preparing
          them for a job market that requires independent problem solving and
          continuous self-development. After completion of our program we guide
          students towards work via our network. With our team of experienced
          professional developers we have created a curriculum around the needs
          of non-western students. Our teachers are all volunteers and extremely
          passionate about coding.
        </p>
        <p>
          We believe talented refugees are a great opportunity for society and
          we are here to give them a helping hand to make use of their
          potential.
        </p>
      </Container>
    </Layout>
  )
}

export default Home
