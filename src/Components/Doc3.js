import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc3() {
    const doc3 = `<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
    </note>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc3}</h3>
  )
}
