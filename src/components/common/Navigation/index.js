import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from "../../../images/simple_logo.png"
import { primaryBlue, secondaryBlue, darkBlue, aqua, orange, pastelYellow } from "../../../utils/colours"
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
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleScroll = () => {
    if (window.pageYOffset > 20 && !hasScrolled) {
      setHasScrolled(true)
    }

    if (window.pageYOffset < 20 && hasScrolled) {
      setHasScrolled(false)
    }
  }
  const toggleNav = () => setNavOpen(!navOpen)
  const closeNav = () => setNavOpen(false)
  const activeStyle = {
    color: aqua,
    textDecoration: "underline",
    textDecorationColor: secondaryBlue
  }

  return (
    <Nav hasScrolled={hasScrolled}>
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
