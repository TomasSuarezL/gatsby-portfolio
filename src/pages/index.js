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
  z-index: 0;
  sborder: 1px solid ${props => props.color};
  animation: ${rotation} ${props => props.rotationSpeed}
      ${props => props.satelliteRadius * 100 + 1000}ms linear infinite,
    ${appear} 1s ${props => props.satelliteRadius * 100}ms ease;
  transform: translateZ(0);
  &:before {
    position: absolute;
    top: ${props => props.satelliteTop}vh;
    content: '';
    width: ${props => props.satelliteRadius}vh;
    height: ${props => props.satelliteRadius}vh;
    border-radius: 50%;
    background-color: ${props => props.color};
    box-shadow: 0px 0px 30px ${props => props.color};
    z-index: 0;
  }
  &.appear {
    opacity: 1;
  }
`

// const Ring = styled.div`
//   height: 10vh;
//   width: 66vh;
//   z-index: 2;
//   position: absolute;
//   top: 47%;
//   left: 3rem;
//   border: 20px solid ${palette.light}aa;
//   border-top: none;
//   border-radius: 100%;
//   transform: rotate(30deg);
// `
// const Ring2 = styled(Ring)`
//   z-index: 0;
//   border: none;
//   border-top: 12px solid ${palette.light}aa;
//   box-shadow: 0 0 20px ${palette.light}aa;
// `
const Ring = styled.div`
  position: absolute;
  flex: 1;
  border-radius: 50%;
`

const Stripe = styled(Ring)`
  width: 42vh;
  height: 26vh;
  left: 160px;
  top: 34%;
  z-index: 6;
  border-bottom: 30px solid ${palette.lighter};
  transform: rotateX(75deg);
`
const StripeB = styled(Stripe)`
  z-index: 1;
  border: 30px solid ${palette.lighter};
  border-bottom: none;
  box-shadow: 0 0 20px ${palette.lighter}af;
`

const Stripe2 = styled(Ring)`
  width: 52vh;
  height: 26vh;
  left: 120px;
  top: 34%;
  z-index: 6;
  border-bottom: 25px solid ${palette.light};
  transform: rotateX(70deg);
`
const StripeB2 = styled(Stripe2)`
  z-index: 1;
  border: 25px solid ${palette.light};
  border-bottom: none;
  box-shadow: 0 0 20px ${palette.light}af;
`
const Stripe3 = styled(Ring)`
  width: 60vh;
  height: 26vh;
  left: 90px;
  top: 34%;
  z-index: 6;
  border-bottom: 20px solid ${palette.primary};
  transform: rotateX(63deg);
`
const StripeB3 = styled(Stripe3)`
  z-index: 1;
  border: 20px solid ${palette.primary};
  border-bottom: none;
  box-shadow: 0 0 20px ${palette.primary}af;
`
const Stripe4 = styled(Ring)`
  width: 68vh;
  height: 26vh;
  left: 60px;
  top: 34%;
  z-index: 6;
  border-bottom: 20px solid ${palette.dark};
  transform: rotateX(55deg);
`
const StripeB4 = styled(Stripe4)`
  z-index: 1;
  border: 20px solid ${palette.dark};
  border-bottom: none;
  box-shadow: 0 0 20px ${palette.dark}af;
`

const MainSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
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
    background-image: linear-gradient(${palette.darker}ff, ${palette.dark}88);
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
  animation: ${appear} 1s ease;

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
    left: 220px;
    top: 34%;
    sbackground: url(${Yoni}) no-repeat center center;
    background-size: cover;
    width: 26vh;
    height: 26vh;
    border-radius: 50%;
    z-index: 2;
    box-shadow: 0px 0px 100px ${palette.dark}ee;
    &:after {
      content: '';
      position: absolute;
      height: 26vh;
      width: 26vh;
      background: linear-gradient(${palette.dark}fe, ${palette.primary}ee);
      border-radius: 50%;
      box-shadow: 0 0 130px ${palette.dark}77;
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
      <Stripe />
      <StripeB />
      <Stripe2 />
      <StripeB2 />
      <Stripe3 />
      <StripeB3 />
      <Stripe4 />
      <StripeB4 />
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
