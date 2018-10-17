import React from 'react'
import styled, { keyframes } from 'styled-components'
import { palette } from '../utils/theme'

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

const Framework = styled.div`
  flex: 1;
  padding: 8px;
  color: ${palette.lighter}aa;
  text-align: center;
  background-color: ${props => props.color}cc;
  box-shadow: 0 0 20px ${props => props.color};
`
const ProjectCard = styled.div`
  flex: 1 1 30%;
  min-width: 20rem;
  height: 11rem;
  display: flex;
  flex-direction: column;
  margin: 16px;
  background-color: #4f4f4f44;
  border: 1px solid white;
  box-shadow: 0 0 20px white;
  border-radius: 4px;
  color: #fafafacc;
  text-shadow: 0 0 24px white;
  opacity: 0;
  font-size: 85%;
  animation: ${textAppear} 0.3s ${props =>
  500 + props.order * 120}ms ease forwards;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 100px white;
  }
  
  .project-title {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    a,p {
      text-decoration: none;
      color: ${palette.lighter}cc;
      margin: 16px;
      padding: 8px;
    }
    .project-name {
      flex: 1;
      font: 600 20px 'Roboto';
    }
    .project-web {
      background-color: ${palette.primary}cc;
      border-radius: 4px;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: ${palette.darker}cc;

      }
    }
    .project-uc {
      background-color: ${palette.darker}aa;
      color: ${palette.primary};
      border-radius: 4px;
    }
  }
    
    .stack {
    flex: 1
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
    align-items:flex-end;
    width: 100%;
  }
  p{
    margin: 24px;
  }
`

const Project = ({ name, description, stack, order, style, link, deploy }) => {
  const stackList = stack.map(f => (
    <Framework key={f.name} className="framework" color={f.color}>
      {f.name}
    </Framework>
  ))
  return (
    <ProjectCard style={style} order={order}>
      <div className="project-title">
        <a href={link} alt={name} className="project-name">
          {name}
        </a>
        {deploy ? (
          <a className="project-web" href={deploy}>
            Web
          </a>
        ) : (
          <p className="project-uc">Under construction</p>
        )}
      </div>
      <p className="project-description">{description}</p>
      <div className="stack">{stackList}</div>
    </ProjectCard>
  )
}

export default Project
