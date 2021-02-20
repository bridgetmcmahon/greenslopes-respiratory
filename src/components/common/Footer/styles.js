import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { primaryBlue, darkBlue } from "../../../utils/colours"
import { md, lg } from "../../../utils/breakpoints"

export const Container = styled.div`
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

export const LogoWrapper = styled.div`
margin: 0 auto 2rem auto;
display: flex;
vertical-align: middle;
text-align: center;
display: flex;
align-items: center;
justify-content: center;

img {
  margin-right: 1rem;
  max-height: 4rem;
}

> p {
  margin-top: 0;
  margin-bottom: 0;
  font-style: italic;
  line-height: 1.15;
  text-align: center;
}

@media ${md} {
  max-width: 25rem;
}
`

export const FooterList = styled.div`
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

export const FooterItem = styled.span`
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

export const Icon = styled(FontAwesomeIcon)`
margin-right: 0.6rem;
color: ${darkBlue};
`

export const Divider = styled.span`
display: none;

@media ${md} {
  display: inline-block;
  color: #e0d3de;
}
`