import React from "react"
import { Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/common/layout"
import Header from "../components/common/Header"
import TeamMember from "../components/TeamMember"
import { HR, TeamLink, TeamImage } from "../utils/sharedStyles"
import { sm, lg } from "../utils/breakpoints"

const Container = styled.div`
  width: 100%;
  padding: 2rem;

  @media ${lg} {
    padding: 5rem;
  }
`

const TeamWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 96rem;

  @media ${sm} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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
      kieren: file(relativePath: { eq: "team/kieren_brown.jpg" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      malcolm: file(relativePath: { eq: "team/malcolm_wilson.jpeg" }) {
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
                John graduated from the University of Queensland in1994. He
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
              fixed={data.malcolm.childImageSharp.fixed}
              alt="Dr Mal Wilson"
            />
            <h2>Dr Mal Wilson</h2>
            <div>
              <p>
                Mal is a Specialist Physician with experience in a wide range of
                Respiratory and Sleep Disorders. He has a special interest in
                pleural disease, respiratory infection – in particular
                mycobacterial disease – and sleep disordered breathing. He is
                currently researching the management of positional
                obstructive sleep apnoea and also holds part-time appointments
                at Logan Hospital and the Metro South Clinical Tuberculosis
                Service.
              </p>
            </div>
          </TeamMember>
        </TeamWrapper>
        <HR />
        <TeamLink>
          <Link to="/our-clinical-sleep-psychologist">
            Meet our clinical sleep psychologist
          </Link>
        </TeamLink>
      </Container>
    </Layout>
  )
}
