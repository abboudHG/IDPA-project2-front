import Button from 'react-bootstrap/Button'
import React,{useState,useEffect} from 'react'
import '../App.css';
export default function Task1() {
const[sourceTED,setSourceTED]=useState('')
const [destinationTED,setDestinationTED]=useState('')
const [SIMVSM,setSIMVSM]=useState('')
const [SIMTED,setSIMTED]=useState('')
const [timeTED,setTimeTED]=useState('')
const[mode,setMode]=useState('')
const[measure,setMeasure]=useState('')
const [timeVSM,setTimeVSM]=useState('')
const[sourceVSM,setSourceVSM]=useState('')
const [destinationVSM,setDestinationVSM]=useState('')
const VSM= async()=>{
  const dic1={'source':sourceVSM,'destination': destinationVSM, 'mode':mode, 'measure': measure}
  await fetch("http://127.0.0.1:5500/VSM", {
    method: "POST",
    headers: {
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'mode' : 'no-cors'

    },
    body: JSON.stringify(dic1)
    }).then((resp)=>{return resp.json()}).then((data)=>{ setSIMVSM(data['VSM']); setTimeVSM(data['timeVSM'])
      console.log(data)})
}

const TED= async()=>{
  const dic1={'source':sourceTED,'destination': destinationTED}
  await fetch("http://127.0.0.1:5400/TED", {
    method: "POST",
    headers: {
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'mode' : 'no-cors'

    },
    body: JSON.stringify(dic1)
    }).then((resp)=>{return resp.json()}).then((data)=>{setSIMTED(data['TED']); setTimeTED(data['timeTED']);
      console.log(data)})
}

  return (
    <div className='mainTask1'>
  <div className='TED'>
  <h2 style={{fontFamily:'gilroy-bold'}}> Similarity using TED: </h2>
  

<div className='dropDown'>
            <label style={{fontSize:"20px", fontFamily:"gilroy-regular"}}> Source: </label>
        <select name="source" style={{fontSize:"20px"}} onChange={(e)=>{setSourceTED(e.target.value)}}>
    <option value="Document 1" style={{fontFamily:"gilroy-regular"}}>Document1</option>
    <option value="Document 2" style={{fontFamily:"gilroy-regular"}}>Document2</option>
    <option value="Document 3" style={{fontFamily:"gilroy-regular"}}>Document3</option>
    
      </select>
        </div>
     <h3 style={{margin:"20px 20px 20px 20px"}}> AND </h3>



     <div>
     <label style={{fontSize:"20px" , fontFamily:"gilroy-regular"}}> Destination: </label>
     <select name="source" style={{fontSize:"20px"}}  onChange={(e)=>{setDestinationTED(e.target.value)}}>
    <option value="Document 1" style={{fontFamily:"gilroy-regular"}}>Document1</option>
    <option value="Document 2" style={{fontFamily:"gilroy-regular"}}>Document2</option>
    <option value="Document 3" style={{fontFamily:"gilroy-regular"}}>Document3</option>
    
      </select>
     </div>
     

     <Button variant="secondary" style={{margin:'10px 10px 10px 10px '}} onClick={TED}>Compute</Button>{' '}

<h4 style={{fontFamily:'gilroy-bold'}}> Similarity:{SIMTED} </h4>
<h4 style={{fontFamily:'gilroy-bold'}}> Run Time (in secs) : {timeTED} </h4>
  </div>

  <hr/>

  <div className='VSM'>
  <h2 style={{fontFamily:'gilroy-bold'}}> Similarity using VSM: </h2>
  


  <div className='dropDown'>
            <label style={{fontSize:"20px", fontFamily:"gilroy-regular"}}> Source: </label>
        <select name="source" style={{fontSize:"20px"}} onChange={(e)=>{setSourceVSM(e.target.value)}}>
    <option value="Document 1" style={{fontFamily:"gilroy-regular"}}>Document1</option>
    <option value="Document 2" style={{fontFamily:"gilroy-regular"}}>Document2</option>
    <option value="Document 3" style={{fontFamily:"gilroy-regular"}}>Document3</option>
    
      </select>
        </div>
     <h3 style={{margin:"20px 20px 20px 20px"}}> AND </h3>



     <div>
     <label style={{fontSize:"20px" , fontFamily:"gilroy-regular"}}> Destination: </label>
     <select name="source" style={{fontSize:"20px"}} onChange={(e)=>{setDestinationVSM(e.target.value)}}>
    <option value="Document 1" style={{fontFamily:"gilroy-regular"}}>Document1</option>
    <option value="Document 2" style={{fontFamily:"gilroy-regular"}}>Document2</option>
    <option value="Document 3" style={{fontFamily:"gilroy-regular"}}>Document3</option>
    
      </select>
     </div>

     <div style={{margin: '10px 10px 10px 10px '}}>
     <label style={{fontSize:"20px" , fontFamily:"gilroy-regular"}}> TF/IDF/TF-IDF </label>
     <select name="source" style={{fontSize:"20px"}} onChange={(e)=>{setMode(e.target.value)}}>
    <option value="TF" style={{fontFamily:"gilroy-regular"}}>TF</option>
    <option value="IDF" style={{fontFamily:"gilroy-regular"}}>IDF</option>
    <option value="TF-IDF" style={{fontFamily:"gilroy-regular"}}>TF AND IDF</option>
    
      </select>
     </div>

     <div style={{margin: '10px 10px 10px 10px '}}>
     <label style={{fontSize:"20px" , fontFamily:"gilroy-regular"}}> Cosine, Euclidian and Pearson </label>
     <select name="source" style={{fontSize:"20px"}} onChange={(e)=>{setMeasure(e.target.value)}}>
    <option value="cosine" style={{fontFamily:"gilroy-regular"}}>Cosine</option>
    <option value="euclidian" style={{fontFamily:"gilroy-regular"}}>Euclidian</option>
    <option value="pearson" style={{fontFamily:"gilroy-regular"}}>Pearson</option>
    
      </select>
     </div>

     <Button variant="secondary" style={{margin:'10px 10px 10px 10px '}} onClick={VSM}>Compute</Button>{' '}

<h4 style={{fontFamily:'gilroy-bold'}}> Similarity: {SIMVSM}</h4>
<h4 style={{fontFamily:'gilroy-bold'}}> Run Time (in secs) :{timeVSM} </h4>
  </div>












 
    </div>




  )
}
