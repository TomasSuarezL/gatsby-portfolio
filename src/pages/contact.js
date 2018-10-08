import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import { palette } from '../utils/theme'
import Yoni from '../static/images/yoni.jpg'

const borderGrow = keyframes`
 from {
    transform: rotateX(0deg) scale(0.9);
 }
 to {
   opacity: 1;
   transform: rotateX(70deg) scale(1);
 }
`

const ContactSection = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  padding-top: 6rem;
  min-height: 100%;
  overflow: auto;
  z-index: 1;
  background-image: linear-gradient(${palette.darker}ff, ${palette.dark}88);
  display: flex;
  }
`

const Image = styled.div`
  position: absolute;
  flex: 1;
  height: 30vw;
  width: 30vw;
  top: 25%;
  left: 35%;
  border-radius: 50%;
  background: url(${Yoni}) no-repeat center center;
  background-size: cover;
  z-index: 5;
  div {
    border-radius: 50%;
    height: 100%;
    width: 100%;
    background: linear-gradient(${palette.dark}ee, ${palette.primary}77);
  }
`
const Ring = styled.div`
  position: absolute;
  flex: 1;
  border-radius: 50%;
`

const Stripe = styled(Ring)`
  height: 40vw;
  width: 45vw;
  top: 20%;
  left: 27%;
  z-index: 6;
  border-bottom: 5vw solid ${palette.lighter};
  transform: rotateX(75deg);
  animation: ${borderGrow} 1.3s ease;
`
const StripeB = styled(Ring)`
  height: 40vw;
  width: 45vw;
  top: 20%;
  left: 27%;
  z-index: 1;
  border: 5vw solid ${palette.lighter};
  border-bottom: none;
  box-shadow: 0 0 5vw ${palette.lighter}af;
  transform: rotateX(75deg);
  animation: ${borderGrow} 1.3s ease;
`
const Stripe2 = styled(Ring)`
  height: 40vw;
  width: 55vw;
  top: 20%;
  left: 22%;
  z-index: 7;
  border-bottom: 4vw solid ${palette.light};
  border-top: none;
  transform: rotateX(70deg);
  animation: ${borderGrow} 0.3s ease;
`
const Stripe2B = styled(Ring)`
  height: 40vw;
  width: 55vw;
  top: 20%;
  left: 22%;
  z-index: 2;
  border: 4vw solid ${palette.light};
  border-bottom: none;
  box-shadow: 0 0 6vw ${palette.light}af;
  transform: rotateX(70deg);
  animation: ${borderGrow} 0.3s ease;
`
const Stripe3 = styled(Ring)`
  height: 40vw;
  width: 70vw;
  top: 20%;
  left: 15%;
  z-index: 8;
  border-bottom: 3vw solid ${palette.primary};
  border-top: none;
  transform: rotateX(65deg);
  animation: ${borderGrow} 0.3s ease;
`
const Stripe3B = styled(Ring)`
  height: 40vw;
  width: 70vw;
  top: 20%;
  left: 15%;
  z-index: 3;
  border: 3vw solid ${palette.primary};
  border-bottom: none;
  box-shadow: 0 0 50px ${palette.primary}af;
  transform: rotateX(65deg);
  animation: ${borderGrow} 0.3s ease;
`

const Stripe4 = styled(Ring)`
  height: 40vw;
  width: 80vw;
  top: 20%;
  left: 10%;
  z-index: 8;
  border-bottom: 3vw solid ${palette.dark};
  border-top: none;
  transform: rotateX(60deg);
  animation: ${borderGrow} 0.3s ease forwards;
`
const Stripe4B = styled(Ring)`
  height: 40vw;
  width: 80vw;
  top: 20%;
  left: 10%;
  z-index: 3;
  border: 3vw solid ${palette.dark};
  border-bottom: none;
  box-shadow: 0 0 50px ${palette.dark}af;
  transform: rotateX(60deg);
  animation: ${borderGrow} 0.3s ease forwards;
`

const Stripe5 = styled(Ring)`
  height: 40vw;
  width: 90vw;
  top: 20%;
  left: 5%;
  z-index: 8;
  border-bottom: 3vw solid ${palette.darker};
  border-top: none;
  transform: rotateX(55deg);
  animation: ${borderGrow} 0.3s ease forwards;
`
const Stripe5B = styled(Ring)`
  height: 40vw;
  width: 90vw;
  top: 20%;
  left: 5%;
  z-index: 3;
  border: 3vw solid ${palette.darker};
  border-bottom: none;
  box-shadow: 0 0 50px ${palette.darker}af;
  transform: rotateX(55deg);
  animation: ${borderGrow} 0.3s ease forwards;
`

const About = () => (
  <ContactSection>
    <Image>
      <div />
    </Image>
    <Stripe />
    <StripeB />
    <Stripe2 />
    <Stripe2B />
    <Stripe3 />
    <Stripe3B />
    <Stripe4 />
    <Stripe4B />
    <Stripe5 />
    <Stripe5B />
  </ContactSection>
)

export default About
