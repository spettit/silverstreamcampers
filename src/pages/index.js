import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import texture from '../images/texture.png'
import SimpleSlider from '../components/Slider'

const H3 = styled.h3`
  text-align: center;
  font-family: 'peralta', 'regular';
  font-weight:lighter;
  font-variant: small-caps;
  color: white;
  background-color: #C96200;
  color: lightgray;
  padding: 0px 20px;
`

const Content = styled.div`
  position: relative;
  height: calc(200vh);
  background-color: #78BBBB;
  background-image: url(${texture});
`

const IndexPage = ({data}) => (
  <Content>
    <div style={{height: 180, backgroundColor: 'white'}}></div>
    <H3>we love rare vintage american travel trailers</H3>
    <div style={{marginTop: '20px'}}>
      <SimpleSlider sizes = {data.contentfulFrontPage.carouselImages}/>
    </div>
  </Content>
)

export default IndexPage

export const mediaQuery = graphql`
  query MediaQuery {
    contentfulFrontPage {
      id
      carouselImages {
        id
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
  }
`
