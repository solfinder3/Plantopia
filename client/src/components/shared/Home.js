import React from 'react';
import {Grid, Container} from 'semantic-ui-react'
import Bg from '../../styles/background.jpg'
import Logo from '../../styles/mainlogo.png'
import '../../styles/homepage.css'
import {Header,Label,Button} from "../../styles/SharedElements"
import {Info} from "../../styles/PlantPageElements.js"
import {Link} from "react-router-dom"

const Home = () => (
  <Grid className='bg'>
    <Grid.Row columns={2}>
      <Grid.Column width={8} textAlign='center' verticalAlign='middle'>
      <Header>Plantopia</Header>
      {/* <img src={Logo} style={{width: '15%',height: '15%'}}/> */}
      <Grid.Row style={{padding:'3em 0em'}}>
      <Label>Never mismanage your plants again.</Label>
      </Grid.Row>
      <Link to='/login'>Login
      <Button>LOGIN</Button>
      </Link>
      <Link to='/register'>
      <Button>SIGN UP</Button>
      </Link>
      </Grid.Column>
      <Grid.Column width={8}>
      {/* <div className='BgWrap'> <img src={Bg}/></div> */}
      </Grid.Column>
    </Grid.Row>
    </Grid>
)

export default Home; 