import React from 'react';
import { Box } from "@material-ui/core";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import Label from '../Label';

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo/>
      <Box>
      <Label
        weight={600}
        size={18}
        lineHeight="100%"
        align="right"
      >
        Financial Freedom <br /> in Your Pocket
      </Label>
      </Box>
    </Box>
  )
}

export default Header
