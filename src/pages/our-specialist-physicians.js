import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/common/layout"
import Header from "../components/common/Header"
import TeamMember from "../components/TeamMember"
import { TeamImage, Container } from "../utils/sharedStyles"
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
      yashu: file(relativePath: { eq: "team/dr_yashu_chang.jpg" }) {
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
            <TeamImage fixed={data.yashu.childImageSharp.fixed} alt="Dr Yashu Chang" />
            <h2>Dr Yashu Chang</h2>
            <p>
              Dr. Chang is a highly experienced Respiratory and Sleep Medicine specialist, who is
              dedicated to providing high-quality, patient-centred care and manages a broad
              spectrum of sleep disorders.
            </p>
            <p>
              Dr. Chang obtained her medical degree from the University of Otago, School of
              Medicine in New Zealand. She completed her fellowship in Sleep Medicine at the
              Royal Prince Alfred Hospital in Sydney in 2016.
            </p>
            <p>
              With extensive clinical experience across Australia and New Zealand, Dr. Chang has
              held various key roles, including Respiratory Physician at North Shore Hospital
              (Auckland, NZ), Respiratory and Sleep Physician at Blacktown Hospital (Sydney,
              Australia), and Consulting Clinician at the Woolcock Institute of Medical Research in
              Sydney. She has also served as a Clinical Lecturer at Western Sydney University,
              where she contributed to undergraduate medical education.
            </p>
            <p>
              Dr. Chang’s research interests have focused on the relationship between sleep-
              disordered breathing and the cardiovascular system.
              Fluent in English, Mandarin, and Taiwanese, Dr. Chang brings a multicultural and
              inclusive approach to her practice. Now based in Brisbane, she is committed to
              delivering expert care to patients at Greenslopes Respiratory and Sleep Centre.
            </p>
          </TeamMember>
        </TeamWrapper>
      </Container>
    </Layout>
  )
}
