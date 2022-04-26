import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc4() {
    const doc4 = `<a>
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
            <p></p>
            <chloe></chloe>
        </w>
    </e>
    <maria>
    maria
        <abboud></abboud>
    </maria>
    <e>
        <v></v>
        <w>
            <p></p>
        </w>
    </e>
</a>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc4}</h3>
  )
}
