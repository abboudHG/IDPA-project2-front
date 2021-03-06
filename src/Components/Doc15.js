import { fontSize } from '@mui/system'
import React from 'react'

export default function Doc15() {
    const doc15 = `<bookstore>

    <book category="cooking">
      <title lang="en">Everyday Italian</title>
      <author>Maria Hanna</author>
      <year>2005</year>
      <price>30.00</price>
    </book>
  
    <book category="children">
      <title lang="en">Abboud Hayek</title>
      <author>J K. Rowling</author>
      <year>2005</year>
      <price>29.99</price>
    </book>
  
    <book category="web">
      <title lang="en">XQuery Kick Start</title>
      <author>James McGovern</author>
      <author>Chloe Boueri</author>
      <author>Kurt Cagle</author>
      <author>James Linn</author>
      <author>Vaidyanathan Nagarajan</author>
      <year>2003</year>
      <price>49.99</price>
    </book>
  
    <book category="web" cover="paperback">
      <title lang="en">Learning XML</title>
      <author>Erik T. Ray</author>
      <year>2003</year>
      <price>39.95</price>
    </book>
  
  </bookstore>`
  return (
    <h3 style={{fontFamily:'gilroy-medium', whiteSpace: 'break-spaces'}}> {doc15}</h3>
  )
}
