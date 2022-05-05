import React,{useEffect,useState} from 'react'
import Select from 'react-select'
import Button from 'react-bootstrap/Button'
import '../App.css';
import Form from 'react-bootstrap/Form'
import { Link } from '@mui/material';
import Modal from 'react-bootstrap/Modal'
export default function Task3() {
  const [mode,setMode]=useState('')
  const [query,setQuery]=useState('')
  const [docs, setDocs]=useState([]);
  const [searchDone,setSearchDone]=useState(false)
  const [results,setResults]=useState()
  const [time,setTime]=useState()
  const[strNew,setStrNew]=useState('')
  const [didYouMean,setDid]=useState(false)
  const [resultsFound,setResultsFound]=useState()
const[k,setK]=useState(5)
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const clearHistory=async()=>{
  await fetch("http://127.0.0.1:5600/clearHistory", {
      method: "GET",
      headers: {
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*',
      'mode' : 'no-cors'
  
      },
      }).then((resp)=>{return resp.json()})
}



const getSearchContent= async()=>{
  let dic1={}
  if(didYouMean==false){
     dic1={'query': query , 'mode':mode,'k':k}
  }
 else{
   dic1={'query': strNew , 'mode':mode, 'k':k}
 }
  await fetch("http://127.0.0.1:5600/content", {
    method: "POST",
    headers: {
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'mode' : 'no-cors'

    },
    body: JSON.stringify(dic1)
    }).then((resp)=>{return resp.json()}).then((data)=>{ 
    setDocs(data['arrDoc']);
   
    
      setResultsFound(true); setDid(false)
      setSearchDone(true); setTime(data['time']); setResults(data['results'])
    
    if(data['word'].length !=0){
      setStrNew(data['word']);
      setDid(true);
    }
    
    
    
    })


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
       <Button variant="dark" style={{margin:'10px 10px 10px 10px '}} onClick={getSearchContent}>Search </Button>{' '}
       <Button variant="dark" style={{margin:'10px 10px 10px 10px '}} onClick={()=>{clearHistory();handleShow()}}>Clear History </Button>{' '}
 </div> 
 </div>
 {resultsFound==false?  <h3 style={{fontFamily:'gilroy-regular'}}> No results found</h3>:null }
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
         {didYouMean==true? <div><Link onClick={()=>{getSearchContent();setDid(false)}}> Did you mean {strNew} ?</Link></div> : null}



         <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Clear History </Modal.Title>
        </Modal.Header>
        <Modal.Body>History Cleared!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
    
        </Modal.Footer>
      </Modal>
    </div>
  )
}
