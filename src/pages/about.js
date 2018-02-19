import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import texture from '../images/texture.png'
import SimpleSlider from '../components/Slider'
import Img from 'gatsby-image'



const Content = styled.div`
  height: 100vh;
  background-color: #78BBBB;
  background-image: url(${texture});
`

const AboutPage = ({data}) => (
  <Content>

  </Content>
)

export default AboutPage
