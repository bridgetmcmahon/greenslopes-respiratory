import React from "react"
import styled from "styled-components"

const Card = styled.div`
  max-width: 30rem;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  min-width: 20rem;

  img {
    border-radius: 100%;
    box-shadow: 2px 2px 10px #cccccc;
    width: 10rem;
    height: 10rem;
    margin-right: 1rem;
  }

  div, img {
    display: inline-block;
  }

  div {
    width: 100%;
  }

  p {
    color: #68748d;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 100%;
  }
`

const TeamMember = ({ imageSrc, name, bio }) => {
  return (
    <Card>
      <img src={imageSrc} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    </Card>
  )
}

export default TeamMember
