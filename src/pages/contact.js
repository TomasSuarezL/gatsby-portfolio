import React from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import { palette } from '../utils/theme'
import Email from '../static/icons/email.svg'
import Phone from '../static/icons/phone.svg'
import Github from '../static/icons/github.svg'
import LinkedIn from '../static/icons/linkedin.svg'
import Fcc from '../static/icons/freecodecamp.svg'

const ContactSection = styled.div`
  position: relative;
  width: 100%;
  padding: 3rem;
  padding-top: 6rem;
  min-height: 100%;
  overflow: auto;
  z-index: 1;
  background-image: linear-gradient(${palette.darker}ff, ${palette.dark}88);
  display: flex;
  flex-direction: row;
  }
`

const ContactSubSection = styled.div`
  flex: 1;
`
const ContactInformationContainer = styled(ContactSubSection)`
  display: flex;
  flex-direction: column;
  padding: 16px;
`
const ContactInformation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  max-width: 20rem;
  color: ${palette.lighter};
  margin: 8px;
  box-shadow: 0 0 25px ${palette.dark}44, 0 0 35px ${palette.primary}aa inset;
  border: 2px solid white;
  border-image: linear-gradient(to right, ${palette.primary}cc, ${palette.light}ff);
  border-image-slice: 1;
  div {
    position: relative;
    left: -46px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    margin: 16px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 0 25px ${palette.dark}44, 0 0 25px ${palette.primary}44 inset;
    filter: drop-shadow(0px 0px 8px ${palette.dark});
    background: linear-gradient(${palette.dark}fe, ${palette.primary}ee);
    svg {
      color: ${palette.light};
    }
  }
  p,
  a {
    margin: 0;
    padding: 12px;
    color: ${palette.light};
    text-shadow: 0 0 20px ${palette.light};
    transition: color 0.3s ease;
  }
  a:hover {
    color: ${palette.lighter};
  }
`

const About = () => (
  <ContactSection>
    <ContactInformationContainer>
      <ContactInformation>
        <div>
          <Email />
        </div>
        <p>tomas.sl@hotmail.com</p>
      </ContactInformation>
      <ContactInformation>
        <div>
          <Phone />
        </div>
        <p>+54 11 3110-4987 </p>
      </ContactInformation>
      <ContactInformation>
        <div>
          <Github />
        </div>
        <a href="https://github.com/TomasSuarezL">TomasSuarezL</a>
      </ContactInformation>
      <ContactInformation>
        <div>
          <LinkedIn />
        </div>
        <a href="https://www.linkedin.com/in/tomas-suarez-lissi-62a180147/">Tomás Suarez Lissi</a>
      </ContactInformation>
      <ContactInformation>
        <div>
          <Fcc />
        </div>
        <a href="https://www.freecodecamp.org/tomassuarezl">@tomassuarezl</a>
      </ContactInformation>
    </ContactInformationContainer>
    <ContactSubSection>
      <div />
    </ContactSubSection>
  </ContactSection>
)

export default About
