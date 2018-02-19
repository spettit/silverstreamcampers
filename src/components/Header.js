import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../images/Logo5.png'
import atom from '../images/Atom2.png'
import texture from '../images/texture.png'

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  height: 180px;
  width: 100vw;
  background-color: #78BBBB;
  background-image: url(${texture});
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  align-items: center;
  box-shadow: 0px 2px 2px gray;
`

const BannerContainer = styled.div`
  height: 140px;
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

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`

const Header = () => (
  <NavContainer>
    <BannerContainer>
  <Atom src={atom} className="App-logo" alt="" />
  <Link to="/">
  <Logo src={logo} width="600" alt="" />
  </Link>
  <Atom src={atom} className="App-logo2" alt="" />
  </BannerContainer>
  <NavButtonContainer>
    <Link className="link" to="/">home</Link>
    <Link className="link" to="/about">about</Link>
    <Link className="link" to="/contact">contact</Link>
  </NavButtonContainer>
</NavContainer>
)

export default Header
