import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../../images/grs_logo.png"
import { primaryBlue, yellow } from "../../../utils/colours"
import { md } from "../../../utils/breakpoints"

const Container = styled.div`
  background-color: #fafafa;
  padding: 1rem;
  color: #ddd;
  text-align: center;

  img {
    max-height: 3rem;
    margin-bottom: 1rem;
  }

  @media ${md} {
    padding: 2rem;
  }
`

const FooterLink = styled(Link)`
  color: ${primaryBlue};
  font-size: 1.1rem;
  display: block;
  padding: 0.2rem 0;

  @media ${md} {
    display: inline-block;
    white-space: nowrap;
    margin: 0 1rem;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const Divider = styled.span`
  display: none;

  @media ${md} {
    display: inline-block;
    color: ${yellow};
  }
`

const Footer = () => {
  return (
    <Container>
      <img src={logo} alt="GRS logo" />
      <div>
        <FooterLink to="/services">Services</FooterLink>
        <Divider>|</Divider>
        <FooterLink to="/our-specialist-physicians">
          Our specialist physicians
        </FooterLink>
        <Divider>|</Divider>
        <FooterLink to="/our-clinical-sleep-psychologist">
          Our clinical sleep psychologist
        </FooterLink>
        <Divider>|</Divider>
        <FooterLink to="/appointments">Appointments</FooterLink>
        <Divider>|</Divider>
        <FooterLink to="/contact-us">Contact us</FooterLink>
      </div>
    </Container>
  )
}

export default Footer
