import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc2() {
    const doc2 = `<planes_for_sale>
    <ad>
       <year> 1965 </year>
       <make> &p; </make>
       <model> Suzuki </model>
       <color> Gold </color>
       <description> 240 hours SMOH, dual NAVCOMs, DME, 
                 new Cleveland brakes, great shape </description>
       <seller phone = "555-333-2222"  
               email = "jseller@www.axl.com">
               Abboud Hayek </seller>
       <location>
          <city> St. Joseph, </city>
          <state> Missouri </state>
       </location>
    </ad>
 </planes_for_sale>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc2}</h3>
  )
}
