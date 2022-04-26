import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc5() {
    const doc5 = `<a>
    <b></b>
    <c>
        <e></e>
        <f></f>
        <g>
            <h></h>
            <i>
                <j>
                    <k></k>
                </j>
            </i>
        </g>
    </c>
    </a>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc5}</h3>
  )
}
