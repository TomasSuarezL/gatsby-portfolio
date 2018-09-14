import React from 'react'
import Link from 'gatsby-link'
import { palette } from '../utils/theme'
import styled, { keyframes } from 'styled-components'
import Yoni from '../static/images/yoni.jpg'

const rotation = keyframes`
from {
  transform: rotate(0deg);
  opacity: 1;
}

to {
  transform: rotate(360deg);
  opacity: 1;
}
`
const appear = keyframes`
from {
  transform: translateY(2rem);
  opacity: 0;
}

to {
  transform: translateY(0);
  opacity: 1;
}
`

const StyledLink = styled(Link)`
  padding: 1rem;
  width: 15vw;
  border-radius: 3px;
  border: 1px solid #ffffffaa;
  box-shadow: 0 0 10px #ffffff, 0 0 10px #ffffff inset;
  color: white;
  text-shadow: 0 0 20px white;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 100px #ffffff;
  }
`

const Orbit = styled.div`
  position: absolute;
  left: ${props => props.position.left}vh;
  top: ${props => props.position.top}vh;
  width: ${props => props.radius}vh;
  height: ${props => props.radius}vh;
  border-radius: 50%;
  margin: 4rem;
  opacity: 0;
  z-index: 1;
  border: 1px solid ${props => props.color};
  animation: ${rotation} ${props => props.rotationSpeed}
      ${props => props.satelliteRadius * 100 + 1000}ms linear infinite,
    ${appear} 1s ${props => props.satelliteRadius * 100}ms ease;
  box-shadow: 0px 0px 30px ${props => props.color},
    0px 0px 30px ${props => props.color} inset;
  &:before {
    position: absolute;
    top: ${props => props.satelliteTop}vh;
    content: '';
    width: ${props => props.satelliteRadius}vh;
    height: ${props => props.satelliteRadius}vh;
    border-radius: 50%;
    background-color: ${props => props.color};
    box-shadow: 0px 0px 30px ${props => props.color};
    z-index: 1;
  }
  &.appear {
    opacity: 1;
  }
`

const MainSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
  z-index: 1;
  .header__bg {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 90%;
    background-image: linear-gradient(${palette.dark}ff, ${palette.primary}88);
    transform: skewY(-10deg);
    transform-origin: top left;
  }
  
  }
`
const Portrait = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: start;
  z-index: 1;

  .content {
    position: absolute;
    right: 0;
    top: 26vh;
    margin: auto;
    padding: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding-right: 10vh;
    padding-top: 10vh;
    text-align: center;
    color: ${palette.lighter};
    z-index: 10;
    h1 {
      font-size: 96px;
      text-shadow: 0px 0px 25px white;
    }
  }
  #image {
    position: absolute;
    left: 16vh;
    top: 30vh;
    background: url(${Yoni}) no-repeat center center;
    background-size: cover;
    width: 26vh;
    height: 26vh;
    border-radius: 50%;
    margin: 4rem;
    z-index: 1;
    box-shadow: 0px 0px 10px white;
    animation: ${appear} 1s ease;
    &:before {
      content: '';
      position: absolute;
      height: 26vh;
      width: 26vh;
      background-color: ${palette.primary}95;
      border-radius: 50%;
      transform-origin: center;
      transform: scale(1);
      transition: transform 0.3s ease;
    }
    &:hover {
      &:before {
        transform: scale(1);
      }
    }
  }
`

const IndexPage = () => (
  <MainSection>
    <div className="header__bg" />
    <Portrait>
      <div className="content">
        <h1>Hi, I'm Tomas</h1>
        <p>I'm a Software Engineer.</p>
        <p>And this is my Website.</p>
        <StyledLink to="/about/">Contact</StyledLink>
      </div>
      <div id="image" />
      <Orbit
        color="#9defaa"
        radius="55"
        position={{ top: 16.5, left: 1.4 }}
        satelliteRadius="3"
        satelliteTop="17"
        rotationSpeed="15s"
      />
      <Orbit
        color="#c4d876"
        radius="45"
        position={{ top: 21.5, left: 6.5 }}
        satelliteRadius="5"
        satelliteTop="29.5"
        rotationSpeed="25s"
      />
      <Orbit
        color="#dc7272"
        radius="35"
        position={{ top: 25.5, left: 11.5 }}
        satelliteRadius="2"
        satelliteTop="22.5"
        rotationSpeed="10s"
      />
      <Orbit
        color="#4e95ff"
        radius="65"
        position={{ top: 11.5, left: -3.5 }}
        satelliteRadius="4"
        satelliteTop="18.5"
        rotationSpeed="50s"
      />
    </Portrait>
  </MainSection>
)

export default IndexPage
