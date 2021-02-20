import React from "react"
import { faEnvelope, faFax, faPhone } from "@fortawesome/free-solid-svg-icons"
import { Container, LogoWrapper, FooterList, FooterItem, Icon, Divider } from "./styles"
import logo from "../../../images/simple_logo.png"

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
