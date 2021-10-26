import React from 'react'
import { Box } from '@material-ui/core'
import Label from '../Label'

const Footer = () => {
  return (
    <Box mt="32px">
      <Label align="center" size={14} weight={600}>
        Update your email preferences or unsubscribe <span style={{color: "#FCB813", cursor: "pointer"}}> here.</span>
      </Label>
      <Label align="center" size={14} weight={600}>
        View our privacy policy <span style={{color: "#FCB813", cursor: "pointer"}}> here.</span>
      </Label>
      <Label align="center" size={14} weight={600} style={{paddingTop: 15}}>
        Copyright © 2021 Pina Indonesia. All rights reserved.
      </Label>
    </Box>
  )
}

export default Footer
