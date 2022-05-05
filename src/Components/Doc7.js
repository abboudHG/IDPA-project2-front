import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc7() {
    const doc7 = `<Department>
    <Student>
    John Takagi
    </Student>
    </Department>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc7}</h3>
  )
}
