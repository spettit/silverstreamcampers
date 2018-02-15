import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// import spartan from './spartan.jpeg'
import spartansepia from './spartansepia.jpg'
import texture from '../images/texture.png'
import vintagespartan from '../images/vintage-spartan.jpg'

const Jumbo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0px auto;
  width: 380px;
  height: 380px;
  border: 10px solid white;
  background-image: url(${vintagespartan});
  background-position: -250px -200px;
  background-repeat: no-repeat;
  background-size: auto;
  filter: sepia(1);
  ${'' /* filter: blur(2px); */}
  margin-bottom: 50px;
  box-shadow: 5px 5px 4px gray;

`
const Strip = styled.div`
  height: 10px;
  background-color: #C96200;
`
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
  height: calc(100vh - 180px);
  background-color: #78BBBB;
  background-image: url(${texture});
`

const IndexPage = () => (
  <Content>
    <H3>we love rare vintage american travel trailers</H3>
    <Jumbo>

    </Jumbo>

    <Strip />

  </Content>



)

export default IndexPage
