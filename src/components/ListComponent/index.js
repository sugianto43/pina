import React from 'react'
import { Box } from '@material-ui/core'
import Label from '../Label'

const ListComponent = ({no, label}) => {
  return (
    <Box display="flex" alignItems="center"  mb="16px">
      <Box display="flex" alignItems="center" style={{marginRight: 16}}>
      <Number no={no}/>
      </Box>
      <Label size={14} weight={400} font="Gotham Rounded light" >{label}</Label>
    </Box>
  )
}

const Number = ({ no }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb="12px"
      style={{
        background: "#FFDC00",
        width: 32,
        height: 32,
        borderRadius: "50%",
        fontSize: 12,
      }}
    >
      {no}
    </Box>
  )
}

export default ListComponent
