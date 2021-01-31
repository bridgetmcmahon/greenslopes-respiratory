import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout"
import Header from "../components/common/Header"
import TeamMember from "../components/TeamMember"
import { md, lg } from "../utils/breakpoints"

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 96rem;
  padding: 1rem;

  @media ${md} {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
  }

  @media ${lg} {
    padding: 5rem;
  }
`

export default function OurSpecialistPhysicians({ location }) {
  const teamMembers = [
    {
      name: "Dr Robyn O'Sullivan",
      bio: "Robyn is a respiratory and sleep physician and principal of GRSC. She \
      thoroughly enjoys her busy clinical private practice, as well as being \
      clinical director of NATA accredited SleepCare Sleep Laboratories. She \
      is a GPH supervisor of both respiratory and sleep medicine physician \
      training and has research interests in mandibular advancement splints, \
      positional therapy and bilateral hypoglossal nerve stimulation in OSA, \
      PTSD and sleep.",
      imageSrc: "https://picsum.photos/180"
    },
    {
      name: "Dr John Aukes",
      bio: "John is respiratory physician, partner Greenslopes Lung Function \
      laboratory",
      imageSrc: "https://picsum.photos/180"
    },
    {
      name: "Dr Dinithi Samaratunga",
      bio: "Dinithi is a respiratory and sleep physician, VMO RBH",
      imageSrc: "https://picsum.photos/180"
    },
    {
      name: "Dr Tim Edwards",
      bio: "Tim is a respiratory and sleep physician, VMO PAH and LoganH",
      imageSrc: "https://picsum.photos/180"
    },
    {
      name: "Dr Sophie Williams",
      bio: "Sophie is a respiratory and sleep physician who completed her \
      undergraduate medical degree in Leicester UK in 2002 and completed her \
      physician training in Queensland in 2011. She has a special interest \
      in sleep disorders, both respiratory and non-respiratory. She works in \
      private practice in Brisbane and also does some regional Queensland \
      clinics.",
      imageSrc: "https://picsum.photos/180"
    },
    {
      name: "Dr Kieren Brown",
      bio: "Kieren is a respiratory and sleep physician – VMO IGH",
      imageSrc: "https://picsum.photos/180"
    },
    {
      name: "Dr Mal Wilson",
      bio: "Mal is a respiratory and sleep physician – VMO Logan Hospital, PAH",
      imageSrc: "https://picsum.photos/180"
    },
  ]
  return (
    <Layout location={location}>
      <Header text="Our specialist physicians" />

      <Container>
        {teamMembers.map(tm => (
          <TeamMember
            key={tm.name}
            name={tm.name}
            bio={tm.bio}
            imageSrc={tm.imageSrc}
          />
        ))}
      </Container>
    </Layout>
  )
}
