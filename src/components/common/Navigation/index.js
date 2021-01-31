import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../../images/grs_logo.png"
import { yellow } from "../../../utils/colours"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import {
  Nav,
  LogoNav,
  LogoContainer,
  NavList,
  NavItem,
  Logo,
  MobileMenu,
} from "./styles"

const Navigation = ({ location }) => {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(!navOpen)
  const closeNav = () => setNavOpen(false)
  const isHomePage = location && location.pathname === "/"
  const activeStyle = {
    color: "#2b71d4",
    textDecoration: "underline"
  }

  return (
    <Nav>
      <LogoNav>
        <LogoContainer>
          <Link to="/">
            <Logo src={logo} alt="GRS logo" />
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
              Our sleep psychologist
            </Link>
          </NavItem>
          <NavItem onClick={closeNav}>
            <Link to="/appointments" activeStyle={activeStyle}>
              Appointments
            </Link>
          </NavItem>
          <NavItem onClick={closeNav}>
            <Link to="/contact-us" activeStyle={activeStyle}>
              Contact us
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
