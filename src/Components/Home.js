import React from 'react'
import '../App.css';
import { useState ,useEffect} from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import pic1 from '../pic1.jpg';
import google from '../google.png'
import structure1 from '../structure.png'
import content1 from '../content.png'
import contentStruc from '../contentStruc.png'
import table from '../table.png'
import Select from 'react-select'
import{useNavigate} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
export default function Home() {
  
let [structureOnly,setStructure]=useState({})
const [arr1,setArr1]=useState([])
const [arr2,setArr2]=useState([])
const fill=()=>{
  for (const key in structureOnly){
    arr1.push(key)
    arr2.push(structureOnly[key]+"")
    
    
  }

}
 const structure= async()=>{
  await fetch("http://127.0.0.1:5500/indexingTableStructure", {
    method: "GET",
    headers: {
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'mode' : 'no-cors'

    },
    }).then((resp)=>{return resp.json()}).then((data)=>{structureOnly=data;fill();
     
    })
 }

useEffect(()=>{
structure();


})



    const options=[
        {value:"D1", label: <span> Document 1</span>},
        {value:"D2", label: <span> Document 2</span>},
        {value:"D3", label: <span> Document 3</span>},
        {value:"D4", label: <span> Document 4</span>},
        {value:"D5", label: <span> Document 5</span>},
        {value:"D6", label: <span> Document 6</span>},
        {value:"D7", label: <span> Document 7</span>},
        {value:"D9", label: <span> Document 8</span>},
        {value:"D9", label: <span> Document 9</span>},
        {value:"D10", label: <span> Document 10</span>},
        {value:"D11", label: <span> Document 11</span>},
        {value:"D12", label: <span> Document 12</span>},
        {value:"D13", label: <span> Document 13</span>},
        {value:"D14", label: <span> Document 14</span>},
        {value:"D15", label: <span> Document 15</span>},
        {value:"D16", label: <span> Document 16</span>},
        {value:"D17", label: <span> Document 17</span>},
        {value:"D18", label: <span> Document 18</span>},
        {value:"D19", label: <span> Document 19</span>},
        {value:"D20", label: <span> Document 20</span>},

      ]
      let [chosenDoc,setChosenDoc]=useState('')
      const navigate=useNavigate();
      const [show, setShow] = useState(false);
      
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      
      

  return (
    <div>
     
    <h1 style={{fontFamily:'gilroy-bold'}}> Semi-Structured Text Document Search using VSM</h1>
    <h2 style={{fontFamily:'gilroy-bold'}}> TASKS : </h2>
    <div className='cards'> 
    <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       component="img"
       height="200"
       image={pic1}
       alt="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'gilroy-medium'}}>
         Similarity using VSM + Comparaison with similarity TED
       </Typography>
       <Typography variant="body2" color="text.secondary" style={{fontFamily:'gilroy-regular '}}>
         In this section, we are going to implement the 3 methods (cosine, euclidian and dice) to
         obtain the similarity between 2 XML documents. After that, we will compare the run time 
         of this approach with the TED previously done in the last project. 
       </Typography>
     </CardContent>
     <CardActions>
       
      <Button size="small" onClick={()=>{navigate('/task1')}} >Start </Button>
      <Button size="small" onClick={()=>{handleShow()}} >Discussion </Button>
     </CardActions>
   </Card>
    </div>
    <div className='card '>
    <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       component="img"
       height="250"
       image={structure1}
       alt="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'gilroy-medium'}}>
         Search query (Structure Only)
       </Typography>
       <Typography variant="body2" color="text.secondary" style={{fontFamily:'gilroy-regular '}}>
         In this section, we are going to implement a search engine that takes as input a tag or structure or XML tree, and then
         the output will be ranking all our according documents by using similarity.  
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small" onClick={()=>{navigate('/task2')}}>Start </Button>
       
     </CardActions>
   </Card>
    </div>

    <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       component="img"
       height="300"
       image={content1}
       alt="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'gilroy-medium'}}>
       Search query (Content Only)
       </Typography>
       <Typography variant="body2" color="text.secondary" style={{fontFamily:'gilroy-regular '}}>
       In this section, we are going to implement a search engine that takes as input a keyword, and then
         the output will be ranking all our according documents by using similarity. 
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small" onClick={()=>{navigate('/task3')}}>Start </Button>
       
     </CardActions>
   </Card>
    </div>

    <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       component="img"
       height="210"
       image={contentStruc}
       alt="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'gilroy-medium'}}>
       Search query (Content and structure)
       </Typography>
       <Typography variant="body2" color="text.secondary" style={{fontFamily:'gilroy-regular '}}>
       In this section, we are going to implement a search engine that takes as input a keyword or xml tree, and then
         the output will be ranking all our according documents by using similarity. 
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small" onClick={()=>{navigate('/task4')}}>Start </Button>
       
     </CardActions>
   </Card>
    </div>
    <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       component="img"
       height="240"
       image={google}
       alt="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'gilroy-medium'}}>
       Advanced Search
       </Typography>
       <Typography variant="body2" color="text.secondary" style={{fontFamily:'gilroy-regular '}}>
       In this section, we are going to implement a search engine advanced, and then
         the output will be ranking all our according documents by using similarity. 
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small" onClick={()=>{navigate('/advancedSearch')}}>Start </Button>
       
     </CardActions>
   </Card>
    </div>
    <div className='card'>
    <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       component="img"
       height="280"
       image={table}
       alt="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'gilroy-medium'}}>
       Indexing structure Tables
       </Typography>
       <Typography variant="body2" color="text.secondary" style={{fontFamily:'gilroy-regular '}}>
       Click on the button to display all the indexing tables needed for the project
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small" onClick={()=>{navigate('/structure')}}>Structure </Button>
       <Button size="small" onClick={()=>{navigate('/content')}} >Content  </Button>
       <Button size="small" onClick={()=>{navigate('/contentStruct')}} >Structure+Content</Button>
     </CardActions>
   </Card>
    </div>
    </div>
    
    <h2 style={{fontFamily:'gilroy-bold'}}> List of XML documents used:  </h2>
   
    <div style={{width:'600px',position:'relative', left: '300px'}}>  
      <Select options={options} isSearchable='true' onChange={(e)=>{setChosenDoc(e.value);let str='/'+e.value; console.log(str); navigate(str)}}/>
        </div>


        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Discussion TED and VSM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Less time when we are comparing two similar documents using VSM</li>
            <li>In structural precision, TED is definetly more accurate</li>
            <li>TF-IDF is unecessary in this case since we are comparing two documents in the same corpus</li>
            <li> Different similarity but directly proportional</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
    
        </Modal.Footer>
      </Modal>


















   </div>
  )
}
