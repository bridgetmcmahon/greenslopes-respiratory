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
  height: 6rem;
  transition: 0.5s all ease;
  position: fixed;
  top: 0;
  z-index: 10;
  ${props =>
    props.hasScrolled && "box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.05)"};

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
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 5rem;
    max-width: 5rem;
    padding: 0.5rem 0;
    vertical-align: middle;
  }
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
  top: 6rem;
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
    height: 6rem;
    font-size: 1.2rem;
  }
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  height: 6rem;
  width: 100%;
  border-bottom: 1px solid #efefef;
  transition: 0.5s all ease;
  
  &:hover {
    background-color: #f9f9f9;
  }
  
  a {
    padding: 0 1rem;
    text-decoration: none;
    color: ${primaryBlue};
    font-weight: 600;
    height: fit-content;
    width: 100%;
    transition: 0.4s all ease;

    &:hover {
      cursor: pointer;
      color: #2b71d4;
      transform: translateX(1rem);
    }
  }

  @media ${md} {
    display: inline;
    padding: 1.4rem 1rem;
    height: 6rem;
    font-size: 1.6rem;
    position: relative;
    width: fit-content;
    border-bottom: none;

    a {
      line-height: 3.2rem;
    }
  }
`

export const MobileMenu = styled.div`
  color: ${primaryBlue};
  font-size: 2.2rem;

  &:hover {
    cursor: pointer;
  }

  @media ${md} {
    display: none;
  }
`
