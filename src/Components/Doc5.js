import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc5() {
    const doc5 = `<breakfast_menu>
    <food>
    <name>Chocolate Belgian Waffles</name>
    <price>$8.95</price>
    <description>Light Belgian waffles covered with strawberries and whipped cream</description>
    <calories>900</calories>
    </food>
    <food>
    <name>Berry-Berry Belgian Waffles</name>
    <price>$8.95</price>
    <description>Light Belgian waffles covered with an assortment of fresh berries and whipped cream</description>
    <calories>900</calories>
    </food>
    <food>
    <name>French Toast</name>
    <price>$4.50</price>
    <description>Thick slices made from our homemade bread</description>
    <calories>600</calories>
    </food>
    <food>
    <name>Homestyle Lunch</name>
    <price>$6.95</price>
    <description>Two eggs, bacon or sausage, toast, and our ever-popular hash browns</description>
    <calories>950</calories>
    </food>
    </breakfast_menu>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc5}</h3>
  )
}
