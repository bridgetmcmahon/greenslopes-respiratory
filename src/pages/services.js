import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout"
import Header from "../components/common/Header"
import { md, lg } from "../utils/breakpoints"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLungs,
  faBed,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  @media ${md} {
    flex-wrap: nowrap;
  }

  @media ${lg} {
    padding: 3rem;
  }
`

const Card = styled.div`
  flex: 1 1 0px;
  background-color: white;
  box-shadow: 0px 0px 8px #f1f1f1;
  border-radius: 4px;
  padding: 2rem;
  margin: 1rem;
  min-width: 18rem;
  max-width: 40rem;

  h3 {
    margin-bottom: 0;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
  }

  @media ${md} {
    padding: 4rem;
  }
`

const CardDropdown = styled.div`
  color: #68748D;

  ul {
    list-style-type: "";
    padding-left: 0;
    
    li {
      padding-bottom: 1.1rem;
    }
  }

  @media ${md} {
    display: block;
  }
`

const Icon = styled.div`
  width: 100%;
  font-size: 5rem;
  text-align: center;
`

export default function Services({ location }) {
  return (
    <Layout location={location}>
      <Header text="Services" />
      <Container>
        <Card>
          <Icon style={{ color: "#F05D5E" }}>
            <FontAwesomeIcon icon={faLungs} />
          </Icon>
          <h3>Respiratory</h3>
          <CardDropdown>
            <ul>
              <li>Shortness of breath</li>
              <li>Cough</li>
              <li>Asthma</li>
              <li>COPD/Emphysema</li>
              <li>Lung nodules</li>
              <li>Interstitial lung disease</li>
              <li>Pleural effusion and other pleural disease</li>
              <li>Diaphragm and neuromuscular disorders</li>
            </ul>
          </CardDropdown>
        </Card>

        <Card>
          <Icon style={{ color: "#578EDD" }}>
            <FontAwesomeIcon icon={faBed} />
          </Icon>
          <h3>Sleep</h3>
          <CardDropdown>
            <ul>
              <li>Sleep apnoea</li>
              <li>Complex sleep breathing disorders</li>
              <li>Narcolepsy and hypersomnia</li>
              <li>Parasomnias</li>
              <li>Circadian rhythm disorders</li>
              <li>Insomnia</li>
            </ul>
          </CardDropdown>
        </Card>

        <Card>
          <Icon style={{ color: "#F4D35E" }}>
            <FontAwesomeIcon icon={faNotesMedical} />
          </Icon>
          <h3>Investigations</h3>
          <CardDropdown>
            <ul>
              <li>Complex lung function testing</li>
              <li>Cardio-pulmonary exercise testing</li>
              <li>Bronchial provocation testing and FeNO</li>
              <li>Bronchoscopy</li>
              <li>Endobronchial ultrasound</li>
              <li>Sleep studies – NATA accredited home and in-lab studies</li>
            </ul>
          </CardDropdown>
        </Card>
      </Container>
    </Layout>
  )
}
