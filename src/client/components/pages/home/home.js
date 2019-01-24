import React from 'react'
import Container from '../../layouts/container'
import '../../layouts/background-shapes/shape.css'
import Layout from '../../layouts'
import HomePageHeader from './home-page-header'
import Parallax from './parallax'
import webTech from './aim.svg'
import team from './team.svg'
// import Parallax from './parallax'

const shadow = {
  boxShadow: '10.565px 22.658px 50px 0 rgba(0,0,0,.1)',
  color: '#555',
  lineHeight: '2rem',
  marginBottom:'3.5rem'
}
const h3 = {
  color: '#1d5896',
  fontSize:'26px'
}
class Home extends React.Component {
  componentDidMount() {
    document.title = 'HackYourFuture Copenhagen'
  }

  render = () => (
    <Layout>
      <HomePageHeader />
      <Container style={shadow}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1, display: 'flex' }}>
            <div style={{margin: 'auto'}}>
              <img
                style={{  maxWidth:'250px' }}
                src={webTech}
                alt=''
              />
            </div>

          </div>
          <div style={{ flex: 1 }}>
            <h3 style={h3}>Our aim</h3>
            <p style={{ textAlign: 'left', lineHeight: '2rem' }}>
              In our free 6-month program we train refugees, asylum seekers and
              people with limited access to further education in modern
              JavaScript software development. Our aim is to have our students
              land their first software development job after finishing our
              course. We achieve this by not only teaching them relevant
              frameworks, but also by preparing them for a job market that
              requires independent problem solving and continuous
              self-development. After completion of our program we guide
              students towards work via our network.
            </p>
          </div>
        </div>
      </Container>


      <Container style={shadow}>
        <div style={{display:'flex'}}>
          <div style={{flex:3,display:'flex'}}>
            <p style={{textAlign:'center',margin:'auto'}}>
              With our team of experienced
              professional developers we have created a curriculum around the needs
              of non-western students. Our teachers are all volunteers and extremely
              passionate about coding.

              We believe talented refugees are a great opportunity for society and
              we are here to give them a helping hand to make use of their
              potential.
            </p>
          </div>
          <div style={{flex:1,display:'flex'}}>
            <div style={{margin:'auto'}}>
              <img src={team} alt='our team' style={{float:'right',width:'200px'}} />
            </div>
          </div>
        </div>


      </Container>


      <Parallax />

      <Container style={shadow}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi asperiores atque, cum ducimus eos error esse, eum fuga hic inventore ipsa iure maxime non quaerat qui quis ratione sapiente similique sint temporibus vitae voluptates? Facere in magnam magni maxime repellat! Ab architecto atque beatae consequatur culpa cupiditate dolores doloribus ducimus error eum minima minus quae ratione rem, suscipit totam, ut, veritatis voluptates! Architecto aspernatur debitis exercitationem, minima natus quas ratione! Alias assumenda aut consectetur corporis cupiditate deleniti dolores eius excepturi expedita fuga illum molestias nam nihil quas quia quos recusandae reprehenderit sapiente sequi sint soluta sunt, vero voluptatibus. Ducimus eligendi laboriosam qui voluptatibus. Ab aliquam aut cum cupiditate debitis distinctio dolor doloremque dolores eos et excepturi expedita explicabo facere hic illo nemo neque numquam officia quam qui, quidem rerum suscipit, ullam vitae, voluptas! Laboriosam, porro, sint. Adipisci autem corporis error iusto, obcaecati quae reprehenderit tempore! Consequatur illo laborum maxime, pariatur quas quidem? Consequuntur culpa, cupiditate dolore harum in ipsam iure nam nostrum quibusdam quos! Doloribus eius eligendi eveniet itaque non quam repellat similique sunt unde, ut. Aliquid corporis culpa cupiditate dolorem ducimus eaque eos esse facere fugit harum hic id illum impedit incidunt ipsum magni, minima minus molestias obcaecati odio officia placeat, provident quae quisquam ratione repudiandae sapiente sequi soluta tempora voluptate. Architecto, aspernatur assumenda aut distinctio eius esse exercitationem id maiores mollitia numquam odio officia officiis perferendis possimus quam, quo, sunt voluptas voluptatum! Facere illum molestiae natus officiis? Aliquam architecto consequuntur dignissimos distinctio dolorem dolorum enim impedit, molestiae molestias nostrum odio quod quos repellat repellendus reprehenderit? Aperiam delectus doloribus ducimus earum esse facere ipsum necessitatibus optio, perferendis praesentium quia ratione suscipit ullam ut voluptatem? Aliquid dolorum est facilis impedit in laborum nesciunt non possimus reprehenderit. Beatae delectus ea et in labore minima molestiae molestias necessitatibus non tempora.
      </Container>

    </Layout>
  )
}

export default Home
