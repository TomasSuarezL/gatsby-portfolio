import React from 'react'
import { palette } from '../utils/theme'
import styled, { keyframes } from 'styled-components'
import School from '../static/icons/school.svg'
import Work from '../static/icons/work.svg'
import Certificate from '../static/icons/certificates.svg'
import ReactLogo from '../static/icons/react-logo.svg'
import JSLogo from '../static/icons/JS.svg'
import NodeLogo from '../static/icons/nodejs.svg'
import CSharpLogo from '../static/icons/c-sharp-logo.png'
import SQLServerLogo from '../static/icons/SQLServer.svg'
import PostgresLogo from '../static/icons/Postgresql.svg'
import MongoLogo from '../static/icons/Mongo.svg'
import PythonLogo from '../static/icons/Python.svg'

const lineScale = keyframes`
    from {
        transform: scaleY(0);
    }
    to {
        transform: scaleY(1);
    }
`
const headerAppear = keyframes`{
    from {
        opacity: 0;
        transform: translateY(2rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}`

const eventMarkAppear = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`
const skillAppear = keyframes`
    from {
      transform: scaleX(0)
    }
    to {
      transform: scaleX(1);
    }
`

const SectionTitle = styled.h3`
  text-align: left;
  margin: 0;
  margin-left: 12px;
  text-shadow: 0 0 20px white;
`

const BackgroundSection = styled.div`
  position: relative;
  padding-top: 6rem;
  width: 100%;
  overflow: auto;
  will-change: transform;
  z-index: 1;
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(${palette.darker}dd, ${palette.dark}ee);
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  }
`
const TimeLineWrapper = styled.div`
  flex: 1;
  margin: 2rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  color: white;

  @media (max-width: 1100px) {
    margin: 1rem auto 1rem auto;
  }

  .timeline-header {
    padding: 0px;
    display: flex;
    align-items: center;
    opacity: 0;
    animation: ${headerAppear} 0.5s ease forwards;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px;
      padding: 4px;
      width: 64px;
      height: 64px;
      border: 1px solid ${palette.lighter};
      border-radius: 50%;
      box-shadow: 0 0 10px white, 0 0 10px white inset;
      svg {
        filter: drop-shadow(0px 0px 4px #ffffff);
      }
    }
  }

  .timeline-row {
    display: flex;
    flex-direction: row;

    .timeline-container {
      width: 64px;
      display: block;
      filter: drop-shadow(0px 0px 4px #ffffff);

      .event-mark {
        position: relative;
        top: -66%;
        margin: auto;
        border-radius: 50%;
        background-color: ${palette.lighter};
        width: 12px;
        height: 12px;
        transform: scale(0);
        animation: ${eventMarkAppear} 0.2s 0.8s ease forwards;
      }
    }

    .event {
      flex: 1;
      padding: 8px;
      opacity: 0;
      animation: ${headerAppear} 0.5s 0.8s ease forwards;
    }

    .event-header {
      color: ${palette.light};
      text-shadow: 0 0 16px ${palette.light};
    }

    .event-titulo {
      padding: 0 8px;
      text-shadow: 0 0 20px white;
      font-weight: 400;
      font-size: 3vh;
      & a:hover {
        color: ${palette.primary};
      }
    }

    .event-descripcion {
      display: flex;
      flex-direction: row;
      font-size: 2vh;
      text-shadow: 0 0 20px white;
    }
  }
`

const Link = styled.a`
  text-decoration: none;
  text-align: center;
  color: ${palette.lighter}cc;
  font: 300 14px 'Roboto';
  padding: 16px;
  margin: 8px;
  flex: 1;
  border: 1px solid ${palette.lighter}cc;
  border-radius: 4px;
  text-shadow: 0 0 10px ${palette.lighter};
  box-shadow: 0 0 6px ${palette.lighter};
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 45px ${palette.lighter};
  }
`

const Line = styled.div`
  height: 100%;
  width: 1px;
  margin: auto;
  background-color: ${palette.lighter};
  filter: drop-shadow(0px 0px 2px #ffffff);
  transform-origin: 0 0;
  transform: scaleY(0);
  animation: ${lineScale} 0.05s ${props => props.order * 50 + 300}ms linear forwards;
`

const SkillsWrapper = styled.div`
  flex: 1
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem 2rem 3rem;
  color: white;
  .skills {
    flex: 1;
    width: 100%;
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Skill = styled.div`
      display: flex;
      flex-direction: row;
      margin: 16px;
      padding: 8px;
      width: 100%;
      align-items: center;
      justify-content: center;
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
      .skill-bar{
        flex: 3;
        smax-width: 20rem;
        padding: 4px;
        background-color: ${props => props.color}77;
        box-shadow: 0 0 30px ${props => props.color}aa;
        .skill-points{
          padding: 8px;
          width: ${props => props.skillPoints}%;
          background-color: ${props => props.color};
          box-shadow: 0 0 30px ${props => props.color}cc;
          transform-origin: 0 0;
          animation: ${skillAppear} 1.3s ease;
        }
      }
`
const TimeLine = () => {
  return (
    <TimeLineWrapper>
      <div className="timeline-header">
        <div>
          <Work />
        </div>
        <SectionTitle>Work Experience</SectionTitle>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={1} />
          <br />
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={2} />
          <div className="event-mark" />
        </div>
        <div className="event event-header">2012 - Present</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={3} />
        </div>
        <div className="event event-titulo">Club Atlético River Plate</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={4} />
        </div>
        <div className="event event-descripcion">Developer - IT Help Desk 2º</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={5} />
          <br />
        </div>
      </div>
      <div className="timeline-header">
        <div>
          <School />
        </div>
        <SectionTitle>Education</SectionTitle>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={1} />
          <br />
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={2} />
          <div className="event-mark" />
        </div>
        <div className="event event-header">2009 - 2016</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={3} />
        </div>
        <div className="event event-titulo">Universidad Tecnológica Nacional (UTN)</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={4} />
        </div>
        <div className="event event-descripcion">Software Engineer</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={5} />
          <br />
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={6} />
          <div className="event-mark" />
        </div>
        <div className="event event-header">2003 - 2008</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={7} />
        </div>
        <div className="event event-titulo">Instituto La Salette A-479</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={8} />
        </div>
        <div className="event event-descripcion">Electronics Technician</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={9} />
          <br />
        </div>
      </div>
      <div className="timeline-header">
        <div>
          <Certificate />
        </div>
        <SectionTitle>Courses & Certifications</SectionTitle>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={1} />
          <br />
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={2} />
          <div className="event-mark" />
        </div>
        <div className="event event-header">2016 - 2018</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={3} />
        </div>
        <div className="event event-descripcion">freeCodeCamp</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={4} />
        </div>
        <div className="event event-descripcion">
          <Link href="https://www.freecodecamp.org/certification/tomassuarezl/responsive-web-design">Responsive</Link>
          <Link href="https://www.freecodecamp.org/certification/tomassuarezl/javascript-algorithms-and-data-structures">Algorithms</Link>
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={4} />
        </div>
        <div className="event event-descripcion">
          <Link href="https://www.freecodecamp.org/certification/tomassuarezl/front-end-libraries">Front End</Link>
          <Link href="https://www.freecodecamp.org/certification/tomassuarezl/data-visualization">Visualization</Link>
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={5} />
          <br />
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={6} />
          <div className="event-mark" />
        </div>
        <div className="event event-header">2018</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={7} />
        </div>
        <div className="event event-descripcion">Udemy</div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={8} />
        </div>
        <div className="event event-descripcion">
          <Link href="https://www.udemy.com/certificate/UC-478OT4DM/">The Advanced Web Developer Bootcamp</Link>
        </div>
      </div>
      <div className="timeline-row">
        <div className="timeline-container">
          <Line order={9} />
          <br />
        </div>
      </div>
    </TimeLineWrapper>
  )
}

const Skills = () => {
  return (
    <SkillsWrapper>
      <SectionTitle>Skills</SectionTitle>
      <div className="skills">
        <Skill color="#f5de19" skillPoints="70">
          <JSLogo />
          <p>JavaScript</p>
          <div className="skill-bar">
            <div className="skill-points" />
          </div>
        </Skill>
        <Skill color="#61dafb" skillPoints="55">
          <ReactLogo />
          <p>React</p>
          <div className="skill-bar">
            <div className="skill-points" />
          </div>
        </Skill>
        <Skill color="#90c53f" skillPoints="50">
          <NodeLogo />
          <p>NodeJS</p>
          <div className="skill-bar">
            <div className="skill-points" />
          </div>
        </Skill>
        <Skill color="#ffe253" skillPoints="40">
          <PythonLogo />
          <p>Python</p>
          <div className="skill-bar">
            <div className="skill-points" />
          </div>
        </Skill>
        <Skill color="#007aff" skillPoints="70">
          <img src={CSharpLogo} alt="C Sharp" />
          <p>C#</p>
          <div className="skill-bar">
            <div className="skill-points" />
          </div>
        </Skill>
        <Skill color="#bd1d1f" skillPoints="80">
          <SQLServerLogo />
          <p>SQLServer</p>
          <div className="skill-bar">
            <div className="skill-points" />
          </div>
        </Skill>
        <Skill color="#54a744" skillPoints="40">
          <MongoLogo />
          <p>MongoDB</p>
          <div className="skill-bar">
            <div className="skill-points" />
          </div>
        </Skill>
        <Skill color="#7397b4" skillPoints="40">
          <PostgresLogo />
          <p>PostgreSQL</p>
          <div className="skill-bar">
            <div className="skill-points" />
          </div>
        </Skill>
        <Skill color="#7397b4" skillPoints="40" />
        <Skill color="#fafafa" skillPoints="95">
          <p>Spanish</p>
          <div className="skill-bar">
            <div className="skill-points" />
          </div>
        </Skill>
        <Skill color="#fafafa" skillPoints="55">
          <p>English</p>
          <div className="skill-bar">
            <div className="skill-points" />
          </div>
        </Skill>
      </div>
    </SkillsWrapper>
  )
}

const Background = () => (
  <BackgroundSection>
    <TimeLine />
    <Skills />
  </BackgroundSection>
)

export default Background
