import React from 'react'
import { Box } from "@material-ui/core"
import Welcome from "../../assets/icons/welcome.png"
import Label from '../Label'

const WelcomeCard = () => {
  return (
    <Box
      mt="32px"
      padding="24px 28px"
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 10px 20px rgba(54, 147, 164, 0.2012)",
        borderRadius: 20,
      }}
    >
      <Label
        weight={600}
        style={{
          fontSize: 20,
          lineHeight: "120%",
          letterSpacing: "-0.02em",
        }}
      >Hi Chou,</Label>
      <Label
        weight={600}
        size={18}
        style={{
          paddingTop: 8
        }}
      >
      Kamu berhasil mengajak <br/>
      1 teman ke early access PINA! Horeee 🎉
      </Label>
      <img src={Welcome} alt="" style={{width: "100%", marginTop: 8}} />
      <Label
        size={14}
        weight={400}
        font="Gotham Rounded light"
      >
      Artinya kamu selangkah lebih dekat untuk menangin hadiah utama <span style={{fontFamily: "Gotham Rounded"}}>25 juta rupiah</span> buat mulai perjalanan finansialmu bareng PINA.
      </Label>
    </Box>
  )
}

export default WelcomeCard
