import React from 'react'
import { palette } from '../utils/theme'
import styled, { keyframes } from 'styled-components'

const BackgroundSection = styled.div`
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

const Background = () => <BackgroundSection />

export default Background
