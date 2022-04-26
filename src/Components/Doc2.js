import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc2() {
    const doc2 = `<a>
<b>
<c>
    <o> </o>
    <d></d>
</c>
</b>
<e>
    <v> </v>
    <w>
        <p></p>
    </w>
</e>
</a>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc2}</h3>
  )
}
