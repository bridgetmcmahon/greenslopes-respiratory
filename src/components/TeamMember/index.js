import React from "react"
import styled from "styled-components"
import { md } from "../../utils/breakpoints"

const Card = styled.div`
  max-width: ${props => (props.maxWidth ? props.maxWidth : "40rem")};
  margin: ${props => props.centered ? "2rem auto" : "2rem 1rem"};
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 30rem;
  flex: 1 1 0;

  h2 {
    margin-bottom: 0;
  }

  img {
    border-radius: 100%;
    width: 14rem;
    height: 14rem;
    object-fit: cover;
  }

  div,
  img {
    display: inline-block;
  }

  div {
    width: 100%;
  }

  p {
    line-height: 1.6;
    width: 100%;
    margin-bottom: 0;
  }

  @media ${md} {
    min-width: 38rem;
    ${props => !props.centered && `margin: 2rem 2rem 0 2rem`};
  }
`

const TeamMember = ({ maxWidth, children, centered }) => {
  return (
    <Card maxWidth={maxWidth} centered={centered}>
      {children}
    </Card>
  )
}

export default TeamMember
