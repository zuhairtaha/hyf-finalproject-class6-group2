import React from 'react'
import '../../layouts/background-shapes/shape.css'
import Layout from '../../layouts'
import HomePageHeader from './home-page-header'
import Parallax from './parallax'
import Sponsors from './sponsors'
import OurAim from './our-aim'
import OurTeam from './our-team'
import OUrMission from './our-mission'
import SocialIcons from './social-icons'
import Footer from "../../layouts/footer/Footer"

class Index extends React.Component {
  componentDidMount() {
    document.title = 'HackYourFuture Copenhagen'
  }

  render = () => (
    <Layout>
      <HomePageHeader />
      <OurAim />
      <OurTeam />
      <Parallax />
      <OUrMission />
      <SocialIcons />
      <Sponsors />
      <Footer/>
    </Layout>
  )
}

export default Index
