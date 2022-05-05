import React,{useEffect,useState} from 'react'
import Select from 'react-select'
import Button from 'react-bootstrap/Button'
import '../App.css';
import Form from 'react-bootstrap/Form'
import { Link } from '@mui/material';
export default function Task2() {
  const [mode,setMode]=useState('')
  const [query,setQuery]=useState('')
  const [docs, setDocs]=useState([]);
  const [searchDone,setSearchDone]=useState(false)
  const [results,setResults]=useState(1)
  const [time,setTime]=useState()
  const [k,setK]=useState(5)
const options=[{value: 'a', label:<div> <span style={{fontFamily:"gilroy-bold",fontSize:"20px"}} >a</span></div> }]
let paths=[]
const getPaths=async()=>{
    await fetch("http://127.0.0.1:5500/getAllPaths", {
        method: "GET",
        headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'mode' : 'no-cors'
    
        },
        }).then((resp)=>{return resp.json()}).then((data)=>{ paths=data.allpaths; fillOptions();})
}

const fillOptions=()=>{
    for (let i=0; i<paths.length; i++){
        options.push({value: paths[i],label:<div> <span style={{fontFamily:"gilroy-bold",fontSize:"20px"}} >{paths[i]}</span></div> })
    }
}
const getSearchXMLPaths= async()=>{
  const dic1={'query': query , 'mode':mode, 'k': k}
  await fetch("http://127.0.0.1:5500/searchXMLPaths", {
    method: "POST",
    headers: {
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'mode' : 'no-cors'

    },
    body: JSON.stringify(dic1)
    }).then((resp)=>{return resp.json()}).then((data)=>{
      setDocs(data['arrDoc']);
      console.log(data) ; 
        
      
        setSearchDone(true); setTime(data['time']); setResults(data['results'])
     
   
     
    
    })


}


useEffect( ()=>{
   getPaths()
})

  return (
    <div>
 <h2 style={{fontFamily:'gilroy-bold'}}> Type in your query: </h2>
 <div className='dropDown'>
            <label style={{fontSize:"20px", fontFamily:"gilroy-regular"}}> Choose to search using an XML tree or tags and paths:</label>
        <select name="source" style={{fontSize:"20px"}} onChange={(e)=>{setMode(e.target.value)}}>
    <option value="xml" style={{fontFamily:"gilroy-regular"}}>XML</option>
    <option value="paths" style={{fontFamily:"gilroy-regular"}}>Paths+Tags</option>

    
      </select>
        </div>
 <div style={{width:'600px', position: 'relative', left: '300px', margin: '30px 30px 30px 30px'}}>  
 <Form >
 <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Insert k" defaultValue={5} onChange={(e)=>{setK(e.target.value)}} />

  </Form.Group>

 </Form>
 <div className='task2Search'>
 <div className='search-button'>
 <Form >
 <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Search" onChange={(e)=>{setQuery(e.target.value)}} />

  </Form.Group>

 </Form>
       <Button variant="dark" style={{margin:'10px 10px 10px 10px '}} onClick={()=>{getSearchXMLPaths()}}>Search </Button>{' '}
 </div> 
 </div>

{searchDone==true && results!=0 ? <h3 style={{fontFamily:'gilroy-regular'}}> Results: {results}</h3>: null}
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
