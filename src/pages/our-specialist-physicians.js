import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/common/layout"
import Header from "../components/common/Header"
import TeamMember from "../components/TeamMember"
import { HorizontalRule, TeamLink, TeamImage, Container } from "../utils/sharedStyles"
import { md } from "../utils/breakpoints"

const TeamWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 96rem;

  @media ${md} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export default function OurSpecialistPhysicians({ location }) {
  const data = useStaticQuery(graphql`
    query teamImages {
      robyn: file(relativePath: { eq: "team/robyn_osullivan.jpg" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      john: file(relativePath: { eq: "team/john_aukes.jpg" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      dinithi: file(relativePath: { eq: "team/dinithi_samaratunga.png" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      tim: file(relativePath: { eq: "team/tim_edwards.jpg" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      sophie: file(relativePath: { eq: "team/sophie_williams.jpeg" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      kieren: file(relativePath: { eq: "team/kieren_brown.png" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      rob: file(relativePath: { eq: "team/dr_robert_sheehy.jpg" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      sam: file(relativePath: { eq: "team/dr_sam_moore.JPG" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      <Header text="Our specialist physicians" />

      <Container>
        <TeamWrapper>
          <TeamMember>
            <TeamImage
              fixed={data.robyn.childImageSharp.fixed}
              alt="Dr Robyn O'Sullivan"
            />
            <h2>Dr Robyn O'Sullivan</h2>
            <div>
              <p>
                Robyn is a senior respiratory and sleep physician and principal
                of GRSC. She has extensive experience in sleep disorders with
                strong clinical and laboratory focus. Special interests include
                dental appliances for obstructive sleep apnoea, complex sleep
                disordered breathing, narcolepsy, respiratory muscle and chest
                wall disorders, and dyspnoea. She thoroughly enjoys her busy
                clinical private practice, as well as being clinical director of
                NATA accredited SleepCare Sleep Laboratories. She is a GPH
                supervisor of both respiratory and sleep medicine physician
                training and has research interests in mandibular advancement
                splints, positional therapy and bilateral hypoglossal nerve
                stimulation in OSA, and PTSD and sleep.
              </p>
            </div>
          </TeamMember>
          <TeamMember>
            <TeamImage
              fixed={data.john.childImageSharp.fixed}
              alt="Dr John Aukes"
            />
            <h2>Dr John Aukes</h2>
            <div>
              <p>
                John graduated from the University of Queensland in 1994. He
                undertook Respiratory training in Brisbane, and has been working
                in private practice since 2004. John is a member of the Thoracic
                Society of Australia and New Zealand, Australian Medical
                Association, European Respiratory Society, and World Association
                for Bronchology &amp; Interventional Pulmonology. His special
                interests include lung cancer, EBUS (endobronchial ultrasound),
                and Interstitial Lung Diseases (ILD).
              </p>
              <p>
                John works in full-time private practice at Greenslopes Private
                Hospital. He held the position of Chair of the Respiratory Unit
                at the hospital from 2006 to 2017. John is actively involved in
                the teaching and supervision of advanced respiratory trainees,
                as well as medical student teaching at Greenslopes Private
                Hospital.
              </p>
            </div>
          </TeamMember>
          <TeamMember>
            <TeamImage
              fixed={data.dinithi.childImageSharp.fixed}
              alt="Dr Dinithi Samaratunga"
            />
            <h2>Dr Dinithi Samaratunga</h2>
            <div>
              <p>
                Dr Dinithi Samaratunga is a graduate of the University of
                Queensland. She undertook her training in Respiratory Medicine
                at the Princess Alexandra Hospital and a Sleep fellowship at The
                Prince Charles Hospital.
              </p>
              <p>
                Dinithi has special interests and has published research in
                Sleep Medicine, notably motor neuron disease, obstructive sleep
                apnoea, respiratory failure and obesity hypoventilation. She
                also practices general respiratory medicine and has skills in
                pleural work and bronchoscopy.
              </p>
              <p>
                Dinithi is available for consultation in Respiratory and Sleep
                Medicine at Greenslopes Hospital, as well as employed as a
                Respiratory physician and Director of sleep medicine at The
                Royal Brisbane and Women’s Hospital.
              </p>
            </div>
          </TeamMember>
          <TeamMember>
            <TeamImage
              fixed={data.tim.childImageSharp.fixed}
              alt="Dr Tim Edwards"
            />
            <h2>Dr Tim Edwards</h2>
            <div>
              <p>
                Tim is available for consultation in all aspects of respiratory
                and sleep medicine. He has a special interest in lung cancer,
                lung nodules, bronchoscopy and pleural disease. He is a
                reporting physician for SleepCare and has experience in complex
                sleep disordered breathing.
              </p>
              <p>
                Tim also holds an appointment at the Princess Alexandra Hospital
                and is a Senior Lecturer at the University of Queensland.
              </p>
            </div>
          </TeamMember>
          <TeamMember>
            <TeamImage
              fixed={data.sophie.childImageSharp.fixed}
              alt="Dr Sophie Williams"
            />
            <h2>Dr Sophie Williams</h2>
            <div>
              <p>
                Sophie is a respiratory and sleep physician who completed her
                undergraduate medical degree in Leicester UK in 2002 and
                completed her physician training in Queensland in 2011. She has
                a special interest in sleep disorders, both respiratory and
                non-respiratory. She works in private practice in Brisbane and
                also does some regional Queensland clinics.
              </p>
            </div>
          </TeamMember>
          <TeamMember>
            <TeamImage
              fixed={data.kieren.childImageSharp.fixed}
              alt="Dr Kieren Brown"
            />
            <h2>Dr Kieren Brown</h2>
            <div>
              <p>
                Kieren is a Specialist Respiratory and Sleep Physician available
                for consultation in all areas of respiratory and sleep medicine.
                He has special interests in lung cancer, bronchoscopy and
                pleural disease. He is a reporting physician for SleepCare and
                has experience in non-respiratory sleep disorders.
              </p>
              <p>
                Kieren also holds an appointment at Ipswich Hospital. He is
                actively involved in the training of medical students and is an
                Education Supervisor for the Physician training program.
              </p>
            </div>
          </TeamMember>
          <TeamMember>
            <TeamImage
              fixed={data.rob.childImageSharp.fixed}
              alt="Dr Rob Sheehy"
            />
            <h2>Dr Rob Sheehy</h2>
            <div>
              <p>
                Rob is a Respiratory &amp; Sleep Physician available for clinic
                consultations. Following his Medical Degree at the University of
                Queensland Rob went on to complete his specialty training
                locally including his Sleep Fellowship at the Princess Alexandra
                Hospital. He is currently a Staff Specialist at the P.A.
                Hospital and a Senior Lecturer for the University of Queensland.
                He is a reporting physician for SleepCare Sleep Laboratories. He
                is a member of the Thoracic Society of Australia &amp; New
                Zealand, along with the Australasian Sleep Association.
              </p>
            </div>
          </TeamMember>
          <TeamMember>
            <TeamImage
              fixed={data.sam.childImageSharp.fixed}
              alt="Dr Sam Moore"
            />
            <h2>Dr Sam Moore</h2>
            <div>
              <p>
                Sam is a specialist Respiratory and Sleep Medicine physician. He
                is currently available for consultation in Sleep Medicine. He
                has experience with all sleep disorders, including complex sleep
                disordered breathing. He is a reporting physician for SleepCare.
              </p>
              <p>
                Sam also holds an appointment at the Princess Alexandra
                Hospital. He is actively involved in the teaching of junior
                medical officers and medical students.
              </p>
            </div>
          </TeamMember>
        </TeamWrapper>
        <HorizontalRule />
        <TeamLink>
          <Link to="/our-clinical-sleep-psychologist">
            Meet our clinical sleep psychologist
          </Link>
        </TeamLink>
      </Container>
    </Layout>
  )
}
