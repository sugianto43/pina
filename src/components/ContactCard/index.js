import React from 'react'
import { Box } from '@material-ui/core'
import background from "../../assets/images/illustration.svg"
import {ReactComponent as Mail} from '../../assets/icons/mail.svg'
import Label from '../Label'

const ContactCard = () => {
  return (
    <Box
      mt="24px"
      padding="24px 28px"
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 10px 20px rgba(54, 147, 164, 0.2012)",
        borderRadius: 20,
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
      }}
    >
      <Label size={16} weight={600} style={{paddingBottom: 12}}>Malu bertanya, sesat di pikiran.</Label>
      <Label size={14} weight={400} font="Gotham Rounded light">Malu bertanya, sesat di pikiran. <br />
        Hubungi kami ya, bila kamu ada pertanyaan. 
      </Label>
      <Box display="flex" alignItems="center" my="12px">
        <Mail style={{marginRight: 6}}/>
        <Label size={14} weight={600}>bella@pina.com</Label>
      </Box>
      <Label size={14} weight={400} font="Gotham Rounded light">Cheers,
      </Label>
      <Label size={14} weight={600} style={{paddingTop: 15}}>PINA.</Label>
    </Box>
  )
}

export default ContactCard
