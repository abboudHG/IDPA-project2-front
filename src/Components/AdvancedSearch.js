import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from '@mui/material';
export default function AdvancedSearch() {
const [type,setType]=useState('');
const [mode,setMode]=useState('');
const [measure,setMeasure]=useState('');
const [queryType,setQueryType]=useState('');
const [query,setQuery]=useState('');    
const [results,setResults]=useState()
const [time,setTime]=useState()
const [searchDone,setSearchDone]=useState(false)
const [docs, setDocs]=useState([]);


const getSearchAdvanced= async()=>{
    const dic1={'query': query , 'mode':mode, 'type': type, 'measure': measure, 'queryType': queryType}
    await fetch("http://127.0.0.1:4000/advanced", {
      method: "POST",
      headers: {
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*',
      'mode' : 'no-cors'
  
      },
      body: JSON.stringify(dic1)
      }).then((resp)=>{return resp.json()}).then((data)=>{ 
        console.log(data) ; setDocs(data['arrDoc']);setSearchDone(true); setTime(data['time']); setResults(data['results'])})
  
  
  }
  return (
    <div>
        <h1 style={{fontFamily:'gilroy-bold'}}> Advanced Search :</h1>
        <div className='dropDown' style={{margin:'10px 10px 10px 10px'}}>
            <label style={{fontSize:"20px", fontFamily:"gilroy-regular"}}> Structure/Content/Structure+Content</label>
        <select name="source" style={{fontSize:"20px"}} onChange={(e)=>{setType(e.target.value)}}>
    <option value="structure" style={{fontFamily:"gilroy-regular"}}>Structure</option>
    <option value="content" style={{fontFamily:"gilroy-regular"}}>Content</option>
    <option value="structureContent" style={{fontFamily:"gilroy-regular"}}>Structure+Content</option>
    
      </select>

        </div>

        <div className='dropDown'  style={{margin:'10px 10px 10px 10px'}}>
            <label style={{fontSize:"20px", fontFamily:"gilroy-regular"}}> TF/IDF/TF-IDF</label>
        <select name="source" style={{fontSize:"20px"}} onChange={(e)=>{setMode(e.target.value)}}>
    <option value="TF" style={{fontFamily:"gilroy-regular"}}>TF</option>
    <option value="IDF" style={{fontFamily:"gilroy-regular"}}>IDF</option>
    <option value="TF-IDF" style={{fontFamily:"gilroy-regular"}}>TF-IDF</option>
    
      </select>
      
        </div>

        <div className='dropDown'  style={{margin:'10px 10px 10px 10px'}}>
            <label style={{fontSize:"20px", fontFamily:"gilroy-regular"}}> Cosine/Euclidian</label>
        <select name="source" style={{fontSize:"20px"}} onChange={(e)=>{setMeasure(e.target.value)}}>
    <option value="cosine" style={{fontFamily:"gilroy-regular"}}>Cosine</option>
    <option value="euclidian" style={{fontFamily:"gilroy-regular"}}>Euclidian</option>
    
    
      </select>
      
        </div>


        <div className='dropDown'  style={{margin:'10px 10px 10px 10px'}}>
            <label style={{fontSize:"20px", fontFamily:"gilroy-regular"}}> Tree/Keywords</label>
        <select name="source" style={{fontSize:"20px"}} onChange={(e)=>{setQueryType(e.target.value)}}>
    <option value="tree" style={{fontFamily:"gilroy-regular"}}>Tree</option>
    <option value="keywords" style={{fontFamily:"gilroy-regular"}}>Keywords</option>
    
    
      </select>
      
        </div>


        <div>
 <div className='search-button'>
 <Form >
 <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Search" onChange={(e)=>{setQuery(e.target.value)}} />

  </Form.Group>

 </Form>
       <Button variant="dark" style={{margin:'10px 10px 10px 10px '}} onClick={getSearchAdvanced}>Search </Button>{' '}
 </div> 
 </div>
 {searchDone==true? <h3 style={{fontFamily:'gilroy-regular'}}> Results: {results}</h3>:null}
{searchDone==true? <h3 style={{fontFamily:'gilroy-regular'}}> Time(in seconds): {time}</h3>:null}
<div className='docs'> 
 <ul>
{docs.map((doc,key)=>{
  const str='/'+doc
  return(
    <div><Link href={str}>{doc}</Link></div>


  )
})}
</ul>
 </div>
    </div>
  )
}
