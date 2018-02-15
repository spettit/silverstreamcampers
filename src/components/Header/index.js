import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../images/logo5.png'
import atom from '../../images/Atom2.png'
import texture from '../../images/texture.png'

const NavContainer = styled.div`
  height: 180px;
  background-color: #78BBBB;
  background-image: url(${texture});
  display: flex;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  align-items: center;
`

const Logo = styled.img`
`

const Atom = styled.img`
  width: 80px;
  height: auto;
  @media (max-width: 600px) {
    display: none;
  }
`


const Header = () => (
  <NavContainer>
  <Atom src={atom} className="App-logo" alt="" />
  <Link to="/">
  <Logo src={logo} width="600" alt="" />
  </Link>
  <Atom src={atom} className="App-logo2" alt="" />
  <hr />
  <br />
</NavContainer>
)

export default Header
