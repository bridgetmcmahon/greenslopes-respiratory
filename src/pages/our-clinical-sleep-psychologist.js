import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/common/layout"
import Header from "../components/common/Header"
import TeamMember from "../components/TeamMember"
import { Container, TeamImage } from "../utils/sharedStyles"
import { HorizontalRule, TeamLink } from "../utils/sharedStyles"

export default function OurClinicalSleepPsychologist({ location }) {
  const data = useStaticQuery(graphql`
    query saraHeadshot {
      sara: file(relativePath: { eq: "team/sara_winter.jpg" }) {
        childImageSharp {
          fixed(width: 130, height: 132) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      <Header text="Our clinical sleep psychologist" />

      <Container>
        <TeamMember maxWidth="96rem" centered>
          <TeamImage fixed={data.sara.childImageSharp.fixed} alt="Dr Sara Winter" />
          <h2>Dr Sara Winter</h2>
          <div>
            <p>
              Dr Sara Winter is a Clinical Psychologist with over 15 years
              experience, with a special interest in sleep disorders and chronic
              disease.
            </p>
            <p>
              Sara completed her PhD in the area of sleep disorders and health
              behaviour change and completed her clinical training at the
              University of Queensland in the area of Clinical and
              Neuro-Psychology. She is experienced in working with a variety of
              clinical presentations including sleep disorders, depression,
              anxiety, trauma, grief and loss, and the psychological
              concomitants of chronic diseases and chronic pain.
            </p>
            <p>
              Sara has also worked in the public system in multidisciplinary
              teams in various specialities including respiratory and sleep,
              thoracic medicine, surgery, critical care, persistent pain,
              bariatrics, and renal medicine.
            </p>
            <p>
              Sara has published in the area of obstructive sleep apnoea and
              treatment adherence to CPAP. Sara has a special interest and
              extensive experience in the psychological aspects of the
              management of sleep disorders including insomnia, hypersomnolence
              conditions, circadian rhythm sleep-wake disorders, OSA,
              parasomnias and nightmares.
            </p>
            <p>
              Cognitive Behaviour Therapy for Insomnia (CBTi) is the Standard,
              first-line recommended treatment for Insomnia (AASM Practice
              Guideline, 2017) and Sara is experienced in this intervention
              modality, as well as Acceptance and Commitment Therapy, Schema
              Therapy, Trauma-focussed interventions, Motivational Interviewing
              and Mindfulness. In addition to providing psychological
              intervention to individuals and groups, Sara is available for
              workshops and talks to small and large groups on the psychological
              management of sleep, and on health behaviour change.
            </p>
            <p>
              Sara is a member of the Australian Psychological Society and the
              Australasian Sleep Association. She is also an approved AHPRA
              Psychology Board of Australia supervisor for all pathways to
              registration as a Psychologist, including the Clinical Registrar
              programme.
            </p>
          </div>
        </TeamMember>
        <HorizontalRule />
        <TeamLink>
          <Link to="/our-specialist-physicians">
            Meet our specialist physicians
          </Link>
        </TeamLink>
      </Container>
    </Layout>
  )
}
