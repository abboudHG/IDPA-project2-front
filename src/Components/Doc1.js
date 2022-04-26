import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc1() {
    const doc1 = `<b>
    hi how are you
        <c>
            <o> maria maria</o>
            <d> abboud i love you</d>
        </c>
        </b>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc1}</h3>
  )
}
