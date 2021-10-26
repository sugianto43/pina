import React from 'react'
import { Box } from "@material-ui/core"
import Label from '../Label'
import Picture from '../Picture'
import Pic1 from '../../assets/images/pic1.png'
import Pic2a from '../../assets/images/pic2a.png'
import Pic2b from '../../assets/images/pic2b.png'
import Pic3 from '../../assets/images/pic3.png'
import Pic4 from '../../assets/images/pic4.png'
import ListComponent from '../ListComponent'

const ExcessCard = () => {
  return (
    <Box
      mt="24px"
      padding="24px 28px"
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 10px 20px rgba(54, 147, 164, 0.2012)",
        borderRadius: 20,
      }}
    >
      <Label weight={600} size={16}>Fitur dan kelebihan aplikasi Pina</Label>
      <Box display="flex" justifyContent="space-between" mt="24px">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Number no="1" />
          <Picture
            image={Pic1}
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Number no="2" />
          <Box display="flex" justifyContent="space-between">
            <Box mr="25px">
              <Picture
                image={Pic2a}
              />
            </Box>
            <Picture
              image={Pic2b}
            />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Number no="3" />
          <Picture
            image={Pic3}
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Number no="4" />
          <Picture
            image={Pic4}
          />
        </Box>
      </Box>
      <Box mt="35px">
        {dataList && dataList.map(value =>(
        <ListComponent 
          key={value.no}
          no={value.no}
          label={value.label}
        />
        ))}
      </Box>
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
        width: 24,
        height: 24,
        borderRadius: "50%",
        fontSize: 12,
      }}
    >
      {no}
    </Box>
  )
}

export default ExcessCard

const dataList = [
  {
    no: "1",
    label: '360 View Semua Aset dalam Satu Tempat'
  },
  {
    no: "2",
    label: 'Tools Finansial yang serbabisa untuk bantu kamu merencanakan dan mengatur keuangan lebih cerdas'
  },
  {
    no: "3",
    label: 'Satu aplikasi dengan berbagai macam cara untuk berinvestasi dan mengembangkan tabungan kamu'
  },
  {
    no: "4",
    label: 'Dapatkan berbagai informasi menarik, tips & trick tentang cara menabung, mengelola pemasukan, dan berinvestasi.'
  },
]