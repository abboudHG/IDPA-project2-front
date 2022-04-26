import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc6() {
    const doc6 = `<Department>
    <Professor>
    John Cramer
    </Professor>
    <Student>
    John Takagi
    </Student>
    </Department>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc6}</h3>
  )
}
