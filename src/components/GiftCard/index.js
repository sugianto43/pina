import React from 'react'
import { Box } from '@material-ui/core'
import {ReactComponent as GiftLeft} from "../../assets/icons/gift-left.svg"
import {ReactComponent as GiftRight} from "../../assets/icons/gift-right.svg"
import Label from '../Label'

const GiftCard = () => {
  return (
    <Box
      mt="24px"
      padding="32px"
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 10px 20px rgba(54, 147, 164, 0.2012)",
        borderRadius: 20,
      }}
    >
      <Label size={16} align="center" weight={600}>Nah, ini hadiah-hadiah yang bisa kamu menangin:</Label>
      <Label size={16} align="center" weight={600} style={{marginTop: 32}}>Hadiah total</Label>
      <Box mt="6px" position="relative">
        <Label size={40} align="center" weight={600}> 100 juta rupiah </Label>
        <Box
          position="absolute"
          left="10px"
          bottom="0px"
        >
          <GiftLeft />
        </Box>
        <Box
          position="absolute"
          right="10px"
          bottom="0px"
        >
          <GiftRight/>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="34px">
        <Box>
          <Label size={16} weight={600} align="center" style={{marginBottom: 8}}>
            <span style={{fontFamily: "Gotham Rounded light", fontWeight:400}}>Posisi 1:</span> 25 Juta Rupiah
          </Label>
          <Label size={16} weight={600} align="center">
          <span style={{fontFamily: "Gotham Rounded light", fontWeight:400}}>Posisi 3:</span> 12 Juta Rupiah
          </Label>
        </Box>
        <Box>
          <Label size={16} weight={600} align="center" style={{marginBottom: 8}}>
            <span style={{fontFamily: "Gotham Rounded light", fontWeight:400}}>Posisi 2:</span> 15 Juta Rupiah
          </Label>
          <Label size={16} weight={600} align="center">
            <span style={{fontFamily: "Gotham Rounded light", fontWeight:400}}>Posisi 4-53:</span> 1 Juta Rupiah
          </Label>
        </Box>
      </Box>
    </Box>
  )
}

export default GiftCard
