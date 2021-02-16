import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../../images/simple_logo.png"
import { primaryBlue, darkBlue } from "../../../utils/colours"
import { faEnvelope, faFax, faPhone } from "@fortawesome/free-solid-svg-icons"
import { md, lg } from "../../../utils/breakpoints"

const Container = styled.div`
  background-color: #fafafa;
  padding: 2rem;
  color: #ddd;
  text-align: center;
  font-size: 1.8rem;
  line-height: 1.2;

  @media ${lg} {
    padding: 3rem;
  }
`

const LogoWrapper = styled.div`
  margin: 0 auto 1rem auto;
  display: flex;
  vertical-align: middle;
  text-align: center;
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
    max-height: 4rem;
    margin-bottom: 1rem;
  }

  > p {
    margin-top: 0;
    font-style: italic;
    line-height: 1.15;
    text-align: center;
  }

  @media ${md} {
    max-width: 25rem;
  }
`

const FooterList = styled.div`
  padding: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  @media ${md} {
    flex-direction: row;
    max-width: 72rem;
    justify-content: space-around;
  }
`

const FooterItem = styled.span`
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  font-size: 1.8rem;
  transition: 0.5s all ease;

  p {
    display: inline-block;
    margin: 0.5rem 0;
    line-height: 1.15;
  }

  a {
    text-decoration: none;
    color: ${primaryBlue};
  }

  &:hover {
    transform: translateX(5px);
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  @media ${md} {
    margin: 0 1rem;
    width: auto;

    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
    &:hover {
      transform: translateY(-5px);
    }
  }
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.6rem;
  color: ${darkBlue};
`

const Divider = styled.span`
  display: none;

  @media ${md} {
    display: inline-block;
    color: #e0d3de;
  }
`

const Footer = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="GRS logo" />
        <p>Specialists who care</p>
      </LogoWrapper>
      <FooterList>
        <FooterItem>
          <Icon icon={faEnvelope} />
          <a href="mailto:admin@grscentre.com.au">admin@grscentre.com.au</a>
        </FooterItem>
        <Divider />
        <FooterItem>
          <Icon icon={faFax} />
          <a href="fax:0733971499">07 3397 1499</a>
        </FooterItem>
        <Divider />
        <FooterItem>
          <Icon icon={faPhone} />
          <a href="tel:0733971488" style={{ marginRight: "0.5rem" }}>
            07 3397 1488
          </a>{" "}
          |{" "}
          <a href="tel:0733947597" style={{ marginLeft: "0.5rem" }}>
            07 3394 7597
          </a>
        </FooterItem>
      </FooterList>
    </Container>
  )
}

export default Footer
