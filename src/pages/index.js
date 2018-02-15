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
  width: 70vw;
  height: 380px;
  border: 10px solid white;
  background-image: url(${vintagespartan});
  background-position: 0px -300px;
  background-repeat: no-repeat;
  background-size: cover;
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
  position: relative;
  height: calc(200vh);
  background-color: #78BBBB;
  background-image: url(${texture});
`

const IndexPage = () => (
  <Content>
    <div style={{height: 180, backgroundColor: 'white'}}></div>
    <H3>we love rare vintage american travel trailers</H3>
    <Jumbo>

    </Jumbo>

    <Strip />

  </Content>



)

export default IndexPage
