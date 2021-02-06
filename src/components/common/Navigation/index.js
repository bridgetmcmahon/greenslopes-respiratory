import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../../images/grs_logo.png"
import { secondaryBlue } from "../../../utils/colours"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import {
  Nav,
  LogoNav,
  LogoContainer,
  NavList,
  NavItem,
  MobileMenu,
} from "./styles"

const Navigation = ({ location }) => {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(!navOpen)
  const closeNav = () => setNavOpen(false)
  const activeStyle = {
    color: "#2b71d4",
    textDecoration: "underline",
    textDecorationColor: secondaryBlue
  }

  return (
    <Nav>
      <LogoNav>
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt="GRS logo" />
          </Link>
        </LogoContainer>
        <NavList navOpen={navOpen}>
          <NavItem onClick={closeNav}>
            <Link to="/services" activeStyle={activeStyle}>
              Services
            </Link>
          </NavItem>
          <NavItem onClick={closeNav}>
            <Link
              to="/our-specialist-physicians"
              activeStyle={activeStyle}
            >
              Our specialist physicians
            </Link>
          </NavItem>
          <NavItem onClick={closeNav}>
            <Link
              to="/our-clinical-sleep-psychologist"
              activeStyle={activeStyle}
            >
              Our clinical sleep psychologist
            </Link>
          </NavItem>
          <NavItem onClick={closeNav}>
            <Link to="/appointments" activeStyle={activeStyle}>
              Appointments
            </Link>
          </NavItem>
          <NavItem onClick={closeNav}>
            <Link to="/find-us" activeStyle={activeStyle}>
              Find us
            </Link>
          </NavItem>
        </NavList>
      </LogoNav>
      <MobileMenu onClick={toggleNav}>
        {navOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </MobileMenu>
    </Nav>
  )
}

export default Navigation
