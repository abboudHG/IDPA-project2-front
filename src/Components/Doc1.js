import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc1() {
    const doc1 = `<planes_for_sale>
    <ad>
       <year> 1977 </year>
       <make> c </make>
       <model> Skyhawk </model>
       <color> Light blue and white </color>
       <description> New paint, nearly new interior,
             685 hours SMOH, full IFR King avionics </description>
       <price> 23,495 </price>
       <seller phone = "555-222-3333"> Skyway Aircraft </seller>
       <location>
          <city> Rapid City, </city>
          <state> South Dakota </state>
       </location>
    </ad>
    <ad>
       <year> 1965 </year>
       <make>c </make>
       <model> Cherokee </model>
       <color> Gold </color>
       <description> 240 hours SMOH, dual NAVCOMs, DME, 
                 new Cleveland brakes, great shape </description>
       <seller phone = "555-333-2222"  
               email = "jseller@www.axl.com">
               John Seller </seller>
       <location>
          <city> St. Joseph, </city>
          <state> Missouri </state>
       </location>
    </ad>
 </planes_for_sale>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc1}</h3>
  )
}
