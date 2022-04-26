import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc3() {
    const doc3 = `<a>
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
         <abboud></abboud>
          <abboud></abboud>
            <p></p>
        </w>
    </e>
</a>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc3}</h3>
  )
}
