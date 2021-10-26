import React from 'react'
import { Box } from '@material-ui/core'
import Label from '../Label'

const ThanksComponent = () => {
  return (
    <Box mt="88px" mb="32px">
      <Label align="center" size={80} font="Bad Script">Thank You</Label>
      <Label size={24} weight={600} align="center">Pina Team</Label>
    </Box>
  )
}

export default ThanksComponent
