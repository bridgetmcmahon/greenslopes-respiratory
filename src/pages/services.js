import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/common/layout"
import Header from "../components/common/Header"
import { sm, md } from "../utils/breakpoints"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLungs,
  faBed,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
  max-width: 96rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  @media ${md} {
    padding: 2rem;
    flex-wrap: nowrap;
  }
`

const Card = styled.div`
  flex-grow: 1;
  background-color: white;
  box-shadow: 0px 0px 8px #f1f1f1;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
  min-width: 18rem;
  max-width: 40rem;

  &:hover {
    cursor: pointer;
  }

  h2,
  svg {
    text-align: center;
  }

  h2 {
    margin-bottom: 0;
  }
`

const CardDropdown = styled.div`
  /* display: none; */
  color: #68748D;
  /* ${props =>
    props.isOpen &&
    ` */
    display: block;
  /* `} */

  ul {
    list-style-type: "";
    
    li {
      padding-bottom: 0.6rem;
    }
  }

  @media ${md} {
    display: block;
  }
`

const Icon = styled.div`
  width: 100%;
  font-size: 3rem;
  text-align: center;
`

export default function Services({ location }) {
  // const [respiratoryOpen, setRespiratoryOpen] = useState(false)
  // const [sleepOpen, setSleepOpen] = useState(false)
  // const [investigationsOpen, setInvestigationsOpen] = useState(false)

  // const toggleRespiratory = () => setRespiratoryOpen(!respiratoryOpen)
  // const toggleSleep = () => setSleepOpen(!sleepOpen)
  // const toggleInvestigations = () => setInvestigationsOpen(!investigationsOpen)

  return (
    <Layout location={location}>
      <Header text="Services" />
      <Container>
        <Card>
          <Icon style={{ color: "#F05D5E" }}>
            <FontAwesomeIcon icon={faLungs} />
          </Icon>
          <h2>Respiratory</h2>
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
          <Icon style={{ color: "#F4D35E" }}>
            <FontAwesomeIcon icon={faBed} />
          </Icon>
          <h2>Sleep</h2>
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
          <Icon style={{ color: "#578EDD" }}>
            <FontAwesomeIcon icon={faNotesMedical} />
          </Icon>
          <h2>Investigations</h2>
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
