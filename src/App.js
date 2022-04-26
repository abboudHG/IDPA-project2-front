import React, {useEffect} from 'react';
import './App.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import pic1 from './pic1.jpg';
import google from './google.png'
import Select from 'react-select'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Task1 from './Components/Task1';
import{useNavigate} from 'react-router-dom'
import Home from './Components/Home';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';
import Doc1 from './Components/Doc1';
import Doc2 from './Components/Doc2';
import Doc3 from './Components/Doc3';
import Doc4 from './Components/Doc4';
import Doc5 from './Components/Doc5';
import Doc6 from './Components/Doc6';
import Doc7 from './Components/Doc7';
import Task4 from './Components/Task4';

import Structure from './Components/Structure';
import Content from './Components/Content';
import StructureContent from './Components/StructureContent';
import AdvancedSearch from './Components/AdvancedSearch';
function App() {
const [docChosen,setDocChosen]=useState('')
const navigate=useNavigate();
// useEffect( ()=>{
//   fetch('http://127.0.0.1:5500/')
//   .then(function(response) {
  
//     return response.json();
//   }).then(function(data) {
//     console.log(data);  
//   });
  
// }
// )


  return (

      
   
   <div className='App'>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/task1' element={<Task1/>}/>
  <Route path='/task2' element={<Task2/>}/>
  <Route path='/task3' element={<Task3/>}/>
  <Route path='/task4' element={<Task4/>}/>
  <Route path='/structure' element={<Structure/>}/>
  <Route path='/content' element={<Content/>}/>
  <Route path='/contentStruct' element={<StructureContent/>}/>
  <Route path='/advancedSearch' element={<AdvancedSearch/>}/>
  <Route path='/D1' element={<Doc1/>}/>
  <Route path='/D2' element={<Doc2/>}/>
  <Route path='/D3' element={<Doc3/>}/>
  <Route path='/D4' element={<Doc4/>}/>
  <Route path='/D5' element={<Doc5/>}/>
  <Route path='/D6' element={<Doc6/>}/>
  <Route path='/D7' element={<Doc7/>}/>
</Routes>



   </div>
   
  );
}

export default App;
