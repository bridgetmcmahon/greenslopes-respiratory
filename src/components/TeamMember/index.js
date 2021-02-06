import React from "react"
import styled from "styled-components"
import { md } from "../../utils/breakpoints"

const Card = styled.div`
  max-width: ${props => (props.maxWidth ? props.maxWidth : "40rem")};
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 30rem;
  flex: 1 1 0;

  img {
    border-radius: 100%;
    box-shadow: 2px 2px 10px #cccccc;
    width: 14rem;
    height: 14rem;
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
    min-width: 38rem
  }
`

const TeamMember = ({ imageSrc, name, maxWidth, children }) => {
  return (
    <Card maxWidth={maxWidth}>
      <img src={imageSrc} alt={name} />
      <div>{children}</div>
    </Card>
  )
}

export default TeamMember
