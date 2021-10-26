import React from 'react'
import { Box } from '@material-ui/core'
import Header from '../../components/Header'
import WelcomeCard from '../../components/WelcomeCard'
import GiftCard from '../../components/GiftCard'

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
    </Box>
  )
}

export default Home
