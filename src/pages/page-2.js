import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// import spartan from './spartan.jpeg'
import spartansepia from './spartansepia.jpg'
import texture from '../images/texture.png'
import vintagespartan from '../images/vintage-spartan.jpg'
import SimpleSlider from './slider'
import Img from 'gatsby-image'



const Content = styled.div`
  height: 100vh;
  background-color: #78BBBB;
  background-image: url(${texture});
`

const SecondPage = ({data}) => (
  <Content>
    <div style={{marginTop: '180'}}>
      <SimpleSlider />
    </div>
    <Img sizes = {data.contentfulAsset.sizes} />


  </Content>
)

export default SecondPage

export const mediaQuery = graphql`
  query MediaQuery {
    contentfulAsset {
      sizes {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
      }
    }
}

`;
