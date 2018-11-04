import React from 'react'
import { palette } from '../utils/theme'
import styled, { keyframes } from 'styled-components'
import Project from '../components/project'

const projectAppear = keyframes`
    0% {
        transform: scaleY(20);
    }
    50% {
    }
    100% {
        transform: translate(0);
        transform: scaleY(1);
    }
`
const textAppear = keyframes`
    from {
        opacity: 0;
        transform: translate(-3rem);
    }
    to {
        opacity: 1;
        transform: translate(0rem);
    }
`

const ProjectsSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(${palette.darker}dd, ${palette.dark}88);
  }
`

const ProjectHeader = styled.div`
  flex: 1;
  flex-wrap: wrap;
  background-color: ${palette.darker}aa;
  padding: 1rem;
  overflow: hidden;
  margin-top: 5rem;
  animation: ${projectAppear} 0.5s ease;
  p {
    text-align: center;
    color: #fafafaee;
    text-shadow: 0 0 40px white;
    opacity: 0;
    margin: 0;
    font: 600 14vw 'Roboto';
    line-height: 11vh;
    animation: ${textAppear} 0.3s 0.5s ease forwards;
  }
`

const ProjectList = styled.div`
  flex: 7;
  background-color: ${palette.dark}44;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
`

const projectFill = [1, 2, 3, 4, 5].map(v => <Project key={v} style={{ height: 0, padding: 0 }} stack={[]} />)

const Projects = () => (
  <ProjectsSection>
    <ProjectHeader>
      <p>PROJECTS</p>
    </ProjectHeader>
    <ProjectList>
      <Project
        order="1"
        name="lapo"
        description="Estadisticas de Lapo BNT"
        link="https://github.com/TomasSuarezL/lapo"
        deploy="https://bnt-lapo.appspot.com/"
        stack={[{ name: 'Python', color: '#4da3d2' }, { name: 'GAE', color: '#619de5' }, { name: 'JQuery', color: '#0868ab' }]}
      />
      <Project
        order="2"
        name="react-cv"
        description="Personal CV built on React Stack"
        link="https://github.com/TomasSuarezL/react-cv"
        deploy="https://tomassuarezl.github.io/react-cv/"
        stack={[{ name: 'React', color: '#61dafb' }, { name: 'Redux', color: '#7248b6' }, { name: 'CRA', color: '#61dafb' }, { name: 'GH pages', color: '#1f201b' }]}
      />
      <Project
        order="3"
        name="LambdaBrewer"
        description="proyecto de prueba"
        link="https://github.com/TomasSuarezL/LambdaBrewer"
        stack={[{ name: 'Android', color: '#65ae43' }, { name: 'Java', color: '#f0931c' }]}
      />
      <Project
        order="4"
        name="cryptocartera"
        description="Seguidor de cartera de cryptos y otros assets."
        link="https://github.com/TomasSuarezL/cryptocartera"
        stack={[{ name: 'Python', color: '#f7dd66' }, { name: 'Flask', color: '#1f1f1f' }, { name: 'PostgreSQL', color: '#31648c' }]}
      />
      <Project
        order="5"
        name="gatsby-portfolio"
        description="Portfolio/CV page made with Gatsby "
        link="https://github.com/TomasSuarezL/gatsby-portfolio"
        stack={[{ name: 'React', color: '#61dafb' }, { name: 'Gatsby', color: '#633194' }]}
      />
      {projectFill}
    </ProjectList>
  </ProjectsSection>
)

export default Projects
