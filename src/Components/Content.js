import React,{useEffect} from 'react'
import { useState } from 'react';
import Table from 'react-bootstrap/Table'
export default function Content() {

const [pathsContent,setpathsContent]=useState([])
const [documentsContent,setDocsContent]=useState([]);
const [contentOnly,setContent]=useState({'hi': [['D1', 0.8450980400142567]], 'how': [['D1', 0.8450980400142567]], 'are': [['D1', 0.8450980400142567]], 'you': [['D1', 1.6901960800285134]], 'maria': [['D1', 0.7359535705891888], ['D3', 0.3679767852945944], ['D4', 0.3679767852945944]], 'abboud': [['D1', 0.8450980400142567]], 'i': [['D1', 0.8450980400142567]], 'love': [['D1', 0.8450980400142567]], 'John': [['D6', 1.0881360887005511], ['D7', 0.5440680443502756]], 'Cramer': [['D6', 0.8450980400142567]], 'Takagi': [['D6', 0.5440680443502756], ['D7', 0.5440680443502756]]})

const fillContent=()=>{
    const arr1=[]
    const arr2=[]
       for(let key in contentOnly){
           arr1.push(key);
           arr2.push(contentOnly[key]+"")
       } 
       setpathsContent(arr1);
       setDocsContent(arr2);
    
    }


useEffect(()=>{
fillContent();
})

  return (
    <div>
        <h2 style={{fontFamily:'gilroy-bold'}}> Content Only: </h2>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Keywords</th>
      <th>Documents + weights</th>
    </tr>
  </thead>
  <tbody>
      {pathsContent.map((row,key)=>{
return(<tr>
    <td>{key+1}</td>
    <td>{row}</td>
    <td>{documentsContent[key]}</td>

  </tr>

)
      })}
   
  </tbody>
</Table>

    </div>
  )
}
