import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc12() {
    const doc12 = `<contact-info>
    <name>Tanmay Patil</name>
    <company>TutorialsPoint</company>
    <phone>(011) 123-4567</phone>
 </contact-info>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc12}</h3>
  )
}
