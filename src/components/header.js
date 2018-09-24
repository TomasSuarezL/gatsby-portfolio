import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { palette } from '../utils/theme'

const NavBar = styled.div`
  position: fixed;
  max-height: 5rem;
  width: 100%;
  color: ${palette.lighter};
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
  box-shadow: 0 0 6px black;
  background-color: ${palette.dark};
`
const Title = styled.p`
  flex: 1;
  margin: 16px;
  font: 600 28px 'Merriweather';
`
const NavBarLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 16px;
  font-size: 16px;
  transition: all 0.3s ease;
  &:hover {
    text-shadow: 0 0 38px white;
  }
`

const Header = ({ siteTitle }) => (
  <NavBar>
    <NavBarLink style={{ flex: 1 }} to="/">
      <Title>{siteTitle}</Title>
    </NavBarLink>
    <NavBarLink to="/about/">About</NavBarLink>
    <NavBarLink to="/background/">Background</NavBarLink>
    <NavBarLink to="/projects/">Projects</NavBarLink>
    <NavBarLink to="/contact/">Contact</NavBarLink>
  </NavBar>
)

export default Header
