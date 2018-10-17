import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import { palette } from '../utils/theme'
import Yoni from '../static/images/yoni.jpg'
import Drum from '../static/icons/drum.svg'
import Read from '../static/icons/read.svg'
import Travel from '../static/icons/travel.svg'
import Cook from '../static/icons/cook.svg'
import Finance from '../static/icons/finance.svg'
import Brew from '../static/icons/homebrew.svg'

const borderGrow = keyframes`
 from {
  transform: scale(0);
 }
 to {
   opacity: 1;
  transform: scale(1);
 }
`

const appear = keyframes`
 from {
  transform: translateY(2rem);
  opacity: 0;
} 
 to {
   opacity: 1;
  transform: translateY(0);
 }
`

const AboutSection = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  min-height: 100%;
  overflow: auto;
  will-change: transform;
  z-index: 1;
  background-image: linear-gradient(${palette.darker}ff, ${palette.dark}88);
  }
`
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

const AboutText = styled.div`
  padding: 2rem;
  padding-top: 6rem;
  margin: 1rem;
  height: 100%;
  color: white;
  flex: 3;
  display: flex;
  flex-direction: column;
  animation: ${appear} 0.3s ease;
  @media (max-width: 1100px) {
    order: 2;
    padding-top: 0;
  }
`
const Portratit = styled.div`
  padding: 2rem;
  padding-top: 6rem;
  position: relative;
  width: 100%;
  justify-content: start;
  z-index: 1;
  flex: 2;
  @media (max-width: 1100px) {
    order: 1;
    position: initial;
  }
  #image {
    position: absolute;
    top: 10vw;
    left: 5vw;
    background: url(${Yoni}) no-repeat center center;
    background-size: cover;
    border-radius: 5px;
    width: 30vw;
    height: 30vw;
    z-index: -1;
    opacity: 0;
    animation: ${borderGrow} 0.4s ease forwards;
    @media (max-width: 1100px) {
      position: initial;
      width: 100%;
      animation: none;
      opacity: 0.7;
      height: 25vh;
    }
  }
`
const Stripe = styled.div`
  position: absolute;
  sheight: ${props => props.index * 10 + 10}vw;
  top: ${props => 35 - props.index * 5}vw;
  sleft: ${props => 15 - props.index * 5}vw;
  swidth: ${props => props.index * 10 + 10}vw;
  left: 5vw;
  width: 30vw;
  height: 5vw;
  background: ${props => props.color}88;
  box-shadow: 0 0 40px ${props => props.color}aa;
  z-index: 1;
  opacity: 0;
  animation: ${borderGrow} 0.3s ${props => props.index * 100}ms ease forwards;
  @media (max-width: 1100px) {
    display: none;
  }
`

const Interests = styled.div`
  display: flex;
  padding: 16px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  h3 {
    text-align: center;
    text-shadow: 0 0 40px white;
    width: 100%;
  }
`

const Interest = styled.div`
  background-color: ${palette.primary}aa;
  box-shadow: 0 0 40px ${palette.primary}aa;
  padding: 24px;
  min-width: 12rem;
  margin: 1rem;
  opacity: 0;
  border-radius: 0 1rem 0rem 1rem;
  animation: ${appear} 0.3s ${props => '0.' + props.order}s ease forwards;
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    font: 300 16px 'Roboto';
    margin: 0;
  }
  svg {
    margin-right: 16px;
  }
`

const flagStripes = ['#add8e6', '#fafafa', '#add8e6']

const About = () => (
  <AboutSection>
    <AboutWrapper>
      <AboutText>
        <p>
          <span style={{ fontSize: 56 }}>Hi, i'm Tomas.</span> I'm a Software
          Engineer from Buenos Aires, Argentina. I graduated at Universidad
          Tecnologica Nacional in 2016. <br />
          <br />
          I've been working at Club Atletico River Plate since 2012, a sports
          club in Buenos Aires, where I started as an IT help-desk. From then
          I've been part in different Software implementations and developed
          many applications, including Client-Server applications (C#,
          SQLServer), Android applications (Java, Kotlin) and Web applications
          (Python, NodeJS, React, etc). At the same time I've busy developing
          some personal{' '}
          <Link style={{ textDecoration: 'none' }} to="/projects">
            <span style={{ fontSize: 24, color: palette.primary }}>
              projects
            </span>
          </Link>
          <br />
          <br /> I've been focusing in Web Development since graduation, but I'm
          interested in learning everything I can in Software Engineering
        </p>
        <div style={{ flex: 1 }} />
        <Interests key="interests">
          <h3>Interests & hobbies</h3>
          <Interest order="1">
            <Read />
            <p>Reading</p>
          </Interest>
          <Interest order="2">
            <Cook />
            <p>Cooking</p>
          </Interest>
          <Interest order="3">
            <Drum />
            <p>Drumming</p>
          </Interest>
          <Interest order="4">
            <Brew />
            <p>Homebrewing</p>
          </Interest>
          <Interest order="5">
            <Travel />
            <p>Traveling</p>
          </Interest>
          <Interest order="6">
            <Finance />
            <p>Finance</p>
          </Interest>
        </Interests>
      </AboutText>
      <Portratit>
        {flagStripes.map((s, i) => (
          <Stripe key={i} color={s} index={i} />
        ))}
        <div id="image" />
      </Portratit>
    </AboutWrapper>
  </AboutSection>
)

export default About
