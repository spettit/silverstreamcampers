import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// import spartan from './spartan.jpeg'
import spartansepia from './spartansepia.jpg'
import texture from '../images/texture.png'
import vintagespartan from '../images/vintage-spartan.jpg'
import SimpleSlider from './slider'



const Content = styled.div`
  height: 100vh;
  background-color: #78BBBB;
  background-image: url(${texture});
`

const SecondPage = () => (
  <Content>
    <div style={{marginTop: '180'}}>
      <SimpleSlider />
    </div>


  </Content>



)

export default SecondPage
