import React,{useEffect,useState} from 'react'
import Select from 'react-select'
import Button from 'react-bootstrap/Button'
import '../App.css';
import Form from 'react-bootstrap/Form'
import { Link } from '@mui/material';
export default function Task4() {
  const [mode,setMode]=useState('')
  const [query,setQuery]=useState('')
  const [docs, setDocs]=useState([]);
  const [searchDone,setSearchDone]=useState(false)
  const [results,setResults]=useState()
  const [time,setTime]=useState()



const getSearchContent= async()=>{
  const dic1={'query': query , 'mode':mode}
  await fetch("http://127.0.0.1:5700/contentStructure", {
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
 <h2 style={{fontFamily:'gilroy-bold'}}> Type in your query: </h2>
 <div className='dropDown'>
            <label style={{fontSize:"20px", fontFamily:"gilroy-regular"}}> Choose to search using an XML tree or tags and paths:</label>
        <select name="source" style={{fontSize:"20px"}} onChange={(e)=>{setMode(e.target.value)}}>
    <option value="xml" style={{fontFamily:"gilroy-regular"}}>XML</option>
    <option value="keywords" style={{fontFamily:"gilroy-regular"}}>Keywords</option>

    
      </select>
        </div>
 <div style={{width:'600px', position: 'relative', left: '300px', margin: '30px 30px 30px 30px'}}>  
 <div className='task2Search'>
 <div className='search-button'>
 <Form >
 <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Search" onChange={(e)=>{setQuery(e.target.value)}} />

  </Form.Group>

 </Form>
       <Button variant="dark" style={{margin:'10px 10px 10px 10px '}} onClick={getSearchContent}>Search </Button>{' '}
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
    </div>
  )
}
