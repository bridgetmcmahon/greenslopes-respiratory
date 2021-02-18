import React from "react"
import { faStethoscope } from "@fortawesome/free-solid-svg-icons"
import Header from "../components/common/Header"
import Layout from "../components/common/layout"
import { Container, Icon } from "../utils/sharedStyles"

export default function Appointments({ location }) {
  return (
    <Layout location={location}>
      <Header text="Appointments" />
      <Container>
        <p>
          Referrals can be sent in by fax, email, Medical Objects from doctors’
          rooms and mail. All referrals are then triaged for priority and
          allocated to one of our specialist team.
        </p>
        <p>
          Patients will be contacted by phone to make appointments. Appointment
          confirmation will be emailed with helpful information, a Patient
          Information Sheet to be completed and any questionnaires that also
          require completion.
        </p>

        <h3>What to bring – if applicable:</h3>
        <ul>
          <li>Completed Patient Information Sheet</li>
          <li>Medicare card</li>
          <li>Health fund details</li>
          <li>Pension / DVA details (if applicable)</li>
          <li>Xray reports</li>
          <li>Lung function test reports</li>
          <li>Sleep study reports</li>
          <li>CPAP machine or SD card, mask and chinstrap</li>
          <li>Completed questionnaires</li>
        </ul>
        <Icon icon={faStethoscope} bottom="-1rem" />
      </Container>
    </Layout>
  )
}
