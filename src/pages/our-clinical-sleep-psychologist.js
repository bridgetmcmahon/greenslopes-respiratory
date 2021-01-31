import React from "react"
import Layout from "../components/common/layout"
import Header from "../components/common/Header"
import TeamMember from "../components/TeamMember"
import { Container } from "../utils/sharedStyles"

export default function OurClinicalSleepPsychologist({ location }) {
  return (
    <Layout location={location}>
      <Header text="Our clinical sleep psychologist" />

      <Container>
        <TeamMember
          name="Dr Sara Winters"
          bio="Dr Sara Winter is a Clinical Psychologist with over 15years
          experience, with a special interest in sleep disorders and chronic
          disease. Sara completed her PhD in the area of sleep disorders and
          health behaviour change and completed her clinical training at the
          University of Queensland in the area of Clinical and Neuro-Psychology.
          She is experienced in working with a variety of clinical presentaFons
          including sleep disorders, depression, anxiety, trauma, grief and
          loss, and the psychological concomitants of chronic diseases and
          chronic pain. Sara has also worked in the public system in
          mulFdisciplinary teams in various specialiFes including respiratory
          and sleep, thoracic medicine, surgery, criFcal care, persistent pain,
          bariatrics, and renal medicine. Sara has published in the area of
          obstrucFve sleep apnoea and treatment adherence to CPAP. Sara has a
          special interest and extensive experience in the psychological aspects
          of the management of sleep disorders including insomnia,
          hypersomnolence condiFons, circadian rhythm sleep-wake disorders, OSA,
          parasomnias and nightmares. CogniFve Behaviour Therapy for Insomnia
          (CBTi) is the Standard, first-line recommended treatment for Insomnia
          (AASM PracFce Guideline, 2017) and Sara is experienced in this
          intervenFon modality, as well as Acceptance and Commitment Therapy,
          Schema Therapy, Trauma-focussed intervenFons, MoFvaFonal Interviewing
          and Mindfulness. In addiFon to providing psychological intervenFon to
          individuals and groups, Sara is available for workshops and talks to
          small and large groups on the psychological management of sleep, and
          on health behaviour change. Sara is a member of the Australian
          Psychological Society and the Australasian Sleep AssociaFon. She is
          also an approved AHPRA Psychology Board of Australia supervisor for
          all pathways to registraFon as a Psychologist, including the Clinical
          Registrar programme."
          imageSrc="https://picsum.photos/180"
        />
      </Container>
    </Layout>
  )
}
