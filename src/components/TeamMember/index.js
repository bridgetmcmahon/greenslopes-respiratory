import React from "react"
import styled from "styled-components"
import { md } from "../../utils/breakpoints"

const Card = styled.div`
  max-width: ${props => (props.maxWidth ? props.maxWidth : "40rem")};
  margin: 2rem 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 30rem;
  flex: 1 1 0;

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
    line-height: 1.4;
    width: 100%;
    margin-bottom: 0;
  }

  @media ${md} {
    min-width: 38rem;
    margin: 2rem 2rem 0 2rem;
  }
`

const TeamMember = ({ maxWidth, children }) => {
  return (
    <Card maxWidth={maxWidth}>
      {children}
    </Card>
  )
}

export default TeamMember
