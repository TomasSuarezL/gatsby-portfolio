import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { palette } from '../utils/theme'
import Email from '../static/icons/email.svg'
import Phone from '../static/icons/phone.svg'
import Github from '../static/icons/github.svg'
import LinkedIn from '../static/icons/linkedin.svg'
import Fcc from '../static/icons/freecodecamp.svg'

const appear = keyframes`
  from {
    transform: translateX(-3rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

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
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 16px;
`

const ContactInformation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 18rem;
  color: ${palette.lighter};
  margin: 2vh;
  padding: 8px;
  sbox-shadow: 0 0 25px ${palette.dark}44, 0 0 35px ${palette.primary}aa inset;
  background: ${palette.darker}aa
  border: 1px solid ${palette.light}cc;
  border-radius: 200px;
  opacity: 0;
  animation: ${appear} 0.2s ${props => props.order * 50}ms ease-in-out forwards;
  div {
    position: relative;
    left: -1px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    smargin: 16px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 0 25px ${palette.dark}44, 0 0 25px ${palette.primary}44 inset;
    filter: drop-shadow(0px 0px 8px ${palette.dark});
    background: linear-gradient(${palette.dark}fe, ${palette.primary}ee);
    svg {
      color: ${palette.light};
      transition: color 0.3s ease;
    }
  }
  p,
  a {
    flex: 1;
    text-align: center;
    margin: 0;
    padding: 12px;
    color: ${palette.light};
   stext-shadow: 0 0 20px ${palette.light};
    transition: color 0.3s ease;
    font-size: 14px;
  }
  &:hover {
    color: ${palette.lighter};
    svg {
      color: ${palette.lighter};
    }
  }
`

const ContactForm = styled.div`
  width:80%;  
  display: flex;
  flex-direction: column;
  align-self:center;
  justify-self: center;
  margin: 24px;
  padding: 16px
  border-radius: 4px;
  background: linear-gradient(${palette.dark}fe, ${palette.primary}ee);
  box-shadow: 0 0 35px ${palette.dark}ff;
  opacity: 0;
  animation: ${appear} 0.3s ease-in-out forwards;
  form {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`
const ContactInput = styled.input`
  margin: 16px;
  padding: 8px;
  border: 1px solid ${palette.light}cc;
  border-radius: 4px;
  background: linear-gradient(${palette.darker}66, ${palette.darker}88);
  color: ${palette.lighter};
`

const ContactTextarea = styled.textarea`
  margin: 16px;
  padding: 8px;
  border: 1px solid ${palette.light}cc;
  border-radius: 4px;
  background: linear-gradient(${palette.darker}66, ${palette.darker}88);
  color: ${palette.lighter};
`

const ContactButton = styled.input`
  position: relative;
  top: 2.1rem;
  width: 50%;
  margin: 0px auto;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${palette.dark};
  color: ${palette.lighter};
  transition: background-color 0.3s ease;
  box-shadow: 0 0 35px ${palette.dark}ff;
  &:hover {
    cursor: pointer;
    background-color: ${palette.darker};
  }
`

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, email, message } = this.state
    fetch('https://155biig0tf.execute-api.us-east-1.amazonaws.com/dev/contact', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        from: `"${name}" <${email}>`,
        subject: 'Contact from Website',
        message,
      }),
    })
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <ContactSection>
        <ContactSubSection>
          <ContactInformation order={1}>
            <div>
              <Email />
            </div>
            <p>tomas.sl@hotmail.com</p>
          </ContactInformation>
          <ContactInformation order={2}>
            <div>
              <Phone />
            </div>
            <p>+54 11 3110-4987 </p>
          </ContactInformation>
          <ContactInformation order={3}>
            <div>
              <Github />
            </div>
            <a href="https://github.com/TomasSuarezL">TomasSuarezL</a>
          </ContactInformation>
          <ContactInformation order={4}>
            <div>
              <LinkedIn />
            </div>
            <a href="https://www.linkedin.com/in/tomas-suarez-lissi-62a180147/">Tomás Suarez Lissi</a>
          </ContactInformation>
          <ContactInformation order={5}>
            <div>
              <Fcc />
            </div>
            <a href="https://www.freecodecamp.org/tomassuarezl">@tomassuarezl</a>
          </ContactInformation>
        </ContactSubSection>
        <ContactSubSection>
          <ContactForm>
            <form onSubmit={this.handleSubmit}>
              <ContactInput type="text" name="name" placeholder="Name..." value={this.state.name} onChange={this.handleChange} />
              <ContactInput type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
              <ContactTextarea name="message" placeholder="message" rows="10" value={this.state.message} onChange={this.handleChange} />
              <ContactButton type="submit" value="Submit" />
            </form>
          </ContactForm>
        </ContactSubSection>
      </ContactSection>
    )
  }
}

export default Contact
