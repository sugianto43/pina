import React from 'react'
import { Typography } from '@material-ui/core'

const Label = ({ children, font, color, size, weight, align, italic, lineHeight, style }) => {
  return (
    <Typography
      style={{
        color: color || "#292929",
        fontSize: size,
        fontWeight: weight,
        textAlign: align,
        lineHeight: lineHeight,
        fontFamily: font || "Gotham Rounded",
        fontStyle: italic ? "italic" : null,
        ...style
      }}
    >
      {children}
    </Typography>
  )
}

export default Label
