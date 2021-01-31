import styled from "styled-components"
import { primaryBlue } from "../../../utils/colours"
import { md } from "../../../utils/breakpoints"

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color: ${primaryBlue};
  padding: 0 1rem;
  width: 100vw;
  height: 4rem;
  transition: 0.5s all ease;
  position: sticky;
  top: 0;
  z-index: 10;

  @media ${md} {
    padding: 0;
    top: 0;
  }
`

export const LogoNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  @media ${md} {
    padding-left: 2rem;
    max-width: 96rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  background-color: white;
  margin: 0;
  padding-left: 2.5rem;
  width: 100%;
  height: calc(100vh - 4rem);
  position: absolute;
  top: 4rem;
  left: -100%;
  list-style-type: none;
  transition: 0.5s all ease;
  z-index: 5;

  ${props =>
    props.navOpen &&
    `
    left: 0;
    z-index: 10;
    align-content: center;
    padding-left: 0;
  `}

  @media ${md} {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: sticky;
    top: 0;
    height: 4rem;
    font-size: 1.2rem;
  }
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  height: 12vw;
  padding: 0.5rem 1rem;
  width: 100%;
  border-bottom: 1px solid #efefef;

  &:hover {
    background-color: #f9f9f9;
  }

  a {
    text-decoration: none;
    color: ${primaryBlue};
    font-weight: 600;

    &:hover {
      cursor: pointer;
      color: #2b71d4;
    }
  }

  @media ${md} {
    display: inline;
    padding: 1.4rem 1rem;
    vertical-align: middle;
    height: 4rem;
    font-size: 1rem;
    position: relative;
    width: fit-content;
    border-bottom: none;
  }
`

export const Logo = styled.img`
  max-height: 4rem;
  max-width: 4rem;
  padding: 0.8rem 0;
`

export const MobileMenu = styled.div`
  color: ${primaryBlue};

  @media ${md} {
    display: none;
  }
`
