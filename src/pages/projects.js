import React from 'react'
import { palette } from '../utils/theme'
import styled, { keyframes } from 'styled-components'
import Project from '../components/project'

const projectAppear = keyframes`
    0% {
        transform: scaleX(20);
    }
    50% {
    }
    100% {
        transform: translate(0);
        transform: scaleX(1);
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
  flex-direction: row;
  background-image: linear-gradient(${palette.dark}dd, ${palette.primary}88);
  }
`

const ProjectHeader = styled.div`
  max-width: 10rem;
  flex: 1;
  flex-wrap: wrap;
  background-color: ${palette.dark}aa;
  padding: 2rem;
  overflow: hidden;
  margin-top: 5rem;
  animation: ${projectAppear} 0.5s ease;
  p {
    text-align: center;
    color: #fafafaee;
    text-shadow: 0 0 40px white;
    opacity: 0;
    margin: 0;
    max-height: 100vh;
    line-height: 9.9vh;
    font-size: 16vh;
    animation: ${textAppear} 0.3s 0.5s ease forwards;
  }
`

const ProjectList = styled.div`
  flex: 7;
  background-color: ${palette.primary}44;
  padding: 1rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
`

const projectFill = [1, 2, 3, 4, 5].map(v => (
  <Project key={v} style={{ height: 0, padding: 0 }} stack={[]} />
))

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
        stack={[
          { name: 'Python', color: '#4da3d2' },
          { name: 'GAE', color: '#619de5' },
          { name: 'JQuery', color: '#0868ab' },
        ]}
      />
      <Project
        order="2"
        name="prueba"
        description="proyecto de prueba"
        stack={[
          { name: 'HTML', color: '#afafaf' },
          { name: 'CSS', color: '#a2a1a3' },
          { name: 'JS', color: '#3f3f3f' },
          { name: 'HTML2', color: '#afafaf' },
          { name: 'CSS2', color: '#a2a1a3' },
          { name: 'JS2', color: '#3f3f3f' },
        ]}
      />
      <Project
        order="3"
        name="prueba"
        description="proyecto de prueba"
        stack={[
          { name: 'HTML', color: '#afafaf' },
          { name: 'CSS', color: '#a2a1a3' },
          { name: 'JS', color: '#3f3f3f' },
        ]}
      />
      <Project
        order="4"
        name="prueba"
        description="proyecto de prueba"
        stack={[
          { name: 'HTML', color: '#afafaf' },
          { name: 'CSS', color: '#a2a1a3' },
          { name: 'JS', color: '#3f3f3f' },
        ]}
      />
      {projectFill}
    </ProjectList>
  </ProjectsSection>
)

export default Projects
