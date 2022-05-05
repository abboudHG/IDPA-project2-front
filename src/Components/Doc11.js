import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc11() {
    const doc11 = `<book>
    <name>A Song of Ice and Fire</name>
    <author>George R. R. Martin</author>
    <language>English</language>
    <genre>Epic fantasy</genre>
   </book>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc11}</h3>
  )
}
