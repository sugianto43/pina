import React from 'react'
import { Box, Grid } from "@material-ui/core"
import Label from '../Label'
import Button from '../Button'
import { ReactComponent as Whatsapp } from '../../assets/icons/whatsapp.svg'
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg'

const ConditionsCard = () => {
  return (
    <Box
      mt="24px"
      padding="34px 28px"
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 10px 20px rgba(54, 147, 164, 0.2012)",
        borderRadius: 20,
      }}
    >
      <Label size={16} weight={600} style={{ marginBottom: 18 }}>Jadi yg paling terdepan untuk mendapat hadiah?</Label>
      <Label size={14} weight={400} font="Gotham Rounded light" style={{ marginBottom: 18 }}>Semakin banyak teman yang bergabung menggunakan kode referral-mu, semakin besar kesempatanmu mendapat hadiah.</Label>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            icon={<Whatsapp />}
            onClick={()=>alert("Button Whatsapp Clicked!")}
          >
            Whatsapp
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            icon={<Twitter />}
            onClick={()=>alert("Button Twitter Clicked!")}
          >
            Twitter
          </Button>
        </Grid>
      </Grid>
      <Label
        size={12}
        weight={600}
        align="center"
        style={{
          marginTop: 18
        }}
      >
        Share unique link: 
        <span
          style={{
            color: "#FCB813",
            paddingLeft: 8,
            cursor: "pointer",
          }}
        >
          https:www.pina.com/XX2349YYCJSZ
        </span>
      </Label>
    </Box>
  )
}

export default ConditionsCard
