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
  height: 10rem;
  display: flex;
  flex-direction: column;
  margin: 8px;
  background-color: #4f4f4f44;
  border: 1px solid white;
  box-shadow: 0 0 20px white;
  border-radius: 4px;
  color: #fafafacc;
  text-shadow: 0 0 24px white;
  opacity: 0;
  font-size: 85%;
  animation: ${textAppear} 0.3s ${props => 500 + props.order * 120}ms ease
    forwards;
  .stack {
    flex: 1
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
    align-items:flex-end;
    width: 100%;
  }
  p{

      margin: 20px;
  }
`

const Project = ({ name, description, stack, order, style }) => {
  const stackList = stack.map(f => (
    <Framework key={f.name} className="framework" color={f.color}>
      {f.name}
    </Framework>
  ))
  return (
    <ProjectCard style={style} order={order}>
      <p className="project-name">{name}</p>
      <p className="project-description">{description}</p>
      <div className="stack">{stackList}</div>
    </ProjectCard>
  )
}

export default Project
