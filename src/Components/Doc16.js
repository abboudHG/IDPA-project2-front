import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc16() {
    const doc16 = `<book category="cooking">
    <title lang="en">Everyday Italian</title>
    <author>Maria Hanna</author>
    <year>2005</year>
    <price>30.00</price>
  </book>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc16}</h3>
  )
}
