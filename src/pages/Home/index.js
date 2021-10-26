import React from 'react'
import { Box, Divider } from '@material-ui/core'
import Header from '../../components/Header'
import WelcomeCard from '../../components/WelcomeCard'
import GiftCard from '../../components/GiftCard'
import ConditionsCard from '../../components/ConditionsCard'
import ExcessCard from '../../components/ExcessCard'
import ContactCard from '../../components/ContactCard'
import ThanksComponent from '../../components/ThanksComponent'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <Box
      maxWidth="600px"
      pt="56px"
      pb="30px"
      mx="auto"
      px="28px"
      style={{
        background: "#F5F7F7"
      }}
    >
      <Header />
      <WelcomeCard />
      <GiftCard />
      <ConditionsCard />
      <ExcessCard />
      <ContactCard />
      <ThanksComponent />
      <Divider />
      <Footer />
    </Box>
  )
}

export default Home
