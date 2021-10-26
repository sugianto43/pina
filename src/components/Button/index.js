import React from 'react'
import { Box } from '@material-ui/core'
import Label from '../Label'

const Button = ({onClick, children, icon}) => {
  return (
    <Box
      onClick={onClick}
      display="flex"
      alignItems="center"
      justifyContent="center"
      py="13px"
      style={{
        background: "#FFDC00",
        borderRadius: 45,
        cursor: "pointer"
      }}
    >
      {icon}<Label size={12} weight={600} italic style={{marginLeft: 8}}>{children || "Button"}</Label>
    </Box>
  )
}

export default Button
