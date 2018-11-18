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
import ReactLogo from '../static/icons/react-logo.svg'
import JSLogo from '../static/icons/JS.svg'
import NodeLogo from '../static/icons/nodejs.svg'
import CSharpLogo from '../static/icons/c-sharp-logo.png'
import SQLServerLogo from '../static/icons/SQLServer.svg'
import PostgresLogo from '../static/icons/Postgresql.svg'
import MongoLogo from '../static/icons/Mongo.svg'
import PythonLogo from '../static/icons/Python.svg'

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
  margin-top: 6rem;
  border-radius: 5px;
  background-color: ${palette.dark}aa;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

const AboutText = styled.div`
  padding: 2rem;
  height: 100%;
  color: white;
  flex: 3;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  animation: ${appear} 0.3s ease;
  opacity: 0.9;
  @media (max-width: 1100px) {
    order: 2;
    padding-top: 0;
  }
`
const Portratit = styled.div`
  position: relative;
  width: 100%;
  justify-content: start;
  z-index: 1;
  flex: 1;
  opacity: 0.6;
  @media (max-width: 1100px) {
    order: 1;
    position: initial;
  }
  #image {
    width: 100%;
    height: 100%;
    background: url(${Yoni}) no-repeat center center;
    background-size: cover;
    border-radius: 5px 0px 0px 5px;
    z-index: -1;
    opacity: 0;
    animation: ${appear} 0.4s ease forwards;
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
  bottom: ${props => 2 - props.index * 1}vw;
  left: 0vw;
  width: 100%;
  height: 1vw;
  background: ${props => props.color};
  box-shadow: 0 0 40px ${props => props.color}aa;
  z-index: 1;
  opacity: 0;
  animation: ${appear} 0.3s ${props => props.index * 100}ms ease forwards;
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
  min-width: 15rem;
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

const Skills = styled(Interests)``

const Skill = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${appear} 0.3s ${props => '0.' + Math.floor(props.order * 0.75)}s ease forwards;
  svg, img {
    width: 24px;
    height: 24px;
    fill: ${props => props.color}
    margin: 0;
    margin-right: 16px;
    filter: drop-shadow( 0px 0px 4px ${props => props.color});
  }
  p{
    flex: 1
    margin: 0;
    color: ${props => props.color}
    text-shadow: 0 0 10px ${props => props.color};
    max-width: 8rem;
    font-weight: 400;
  }
`

const StyledLink = styled(Link)`
  span {
    font-size: 3vh;
    color: ${palette.light};
  }
  &:hover {
    span {
      color: ${palette.primary};
    }
  }
`

const flagStripes = ['#add8e6', '#fafafa', '#add8e6']

const About = () => (
  <AboutSection>
    <AboutWrapper>
      <Portratit>
        {flagStripes.map((s, i) => (
          <Stripe key={i} color={s} index={i} />
        ))}
        <div id="image" />
      </Portratit>
      <AboutText>
        <p>
          <span style={{ fontSize: 56 }}>Hi, i'm Tomas.</span>
          <br /> I'm a Software Engineer from Buenos Aires, Argentina. I graduated from Universidad Tecnológica Nacional in 2016. <br />
          <br />
          I've been working at Club Atletico River Plate since 2012, a sports club in Buenos Aires, where I started as an IT help-desk. From then I've been part in different Software implementations
          and developed many applications, including Client-Server applications (C#, SQLServer), Android applications (Java, Kotlin) and Web applications (Python, NodeJS, React, etc). At the same time
          I've busy developing some personal{' '}
          <StyledLink to="/projects">
            <span>projects</span>
          </StyledLink>
          <br />
          <br /> I've been focusing in Web Development since graduation, but I'm interested in learning everything I can in Software Engineering
        </p>
        <div style={{ flex: 1 }} />
        <Skills>
          <h3>Skills</h3>
          <Skill color="#f5de19" skillPoints="70" order="1">
            <JSLogo />
            <p>JavaScript</p>
          </Skill>
          <Skill color="#61dafb" skillPoints="55" order="2">
            <ReactLogo />
            <p>React</p>
          </Skill>
          <Skill color="#90c53f" skillPoints="50" order="3">
            <NodeLogo />
            <p>NodeJS</p>
          </Skill>
          <Skill color="#ffe253" skillPoints="40" order="4">
            <PythonLogo />
            <p>Python</p>
          </Skill>
          <Skill color="#007aff" skillPoints="70" order="5">
            <img src={CSharpLogo} alt="C Sharp" />
            <p>C#</p>
          </Skill>
          <Skill color="#bd1d1f" skillPoints="80" order="6">
            <SQLServerLogo />
            <p>SQLServer</p>
          </Skill>
          <Skill color="#54a744" skillPoints="40" order="7">
            <MongoLogo />
            <p>MongoDB</p>
          </Skill>
          <Skill color="#7397b4" skillPoints="40" order="8">
            <PostgresLogo />
            <p>PostgreSQL</p>
          </Skill>
        </Skills>
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
    </AboutWrapper>
  </AboutSection>
)

export default About
