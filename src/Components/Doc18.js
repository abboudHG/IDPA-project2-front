import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc18() {
    const doc18 = `<nitf>
    <head>
      <title>Colombia Earthquake</title>
    </head>
    <body>
      <headline>
        <hl1>143 Dead in Colombia Earthquake</hl1>
      </headline>
      <byline>
        <bytag>By Chloe Boueiri, Associated Press Writer</bytag>
      </byline>
      <dateline>
        <location>Beirut</location>
        <date>Monday January 25 1999 7:28 ET</date>
      </dateline>
    </body>
  </nitf>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc18}</h3>
  )
}
