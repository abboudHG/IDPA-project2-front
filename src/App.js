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
import Doc8 from './Components/Doc8';
import Doc9 from './Components/Doc9';
import Doc10 from './Components/Doc10';
import Doc11 from './Components/Doc11';
import Doc12 from './Components/Doc12';
import Doc13 from './Components/Doc13';
import Doc14 from './Components/Doc14';
import Doc15 from './Components/Doc15';
import Doc16 from './Components/Doc16';
import Doc17 from './Components/Doc17';
import Doc18 from './Components/Doc18';
import Doc19 from './Components/Doc19';
import Doc20 from './Components/Doc20';
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
  <Route path='/D8' element={<Doc8/>}/>
  <Route path='/D9' element={<Doc9/>}/>
  <Route path='/D10' element={<Doc10/>}/>
  <Route path='/D11' element={<Doc11/>}/>
  <Route path='/D12' element={<Doc12/>}/>
  <Route path='/D13' element={<Doc13/>}/>
  <Route path='/D14' element={<Doc14/>}/>
  <Route path='/D15' element={<Doc15/>}/>
  <Route path='/D16' element={<Doc16/>}/>
  <Route path='/D17' element={<Doc17/>}/>
  <Route path='/D18' element={<Doc18/>}/>
  <Route path='/D19' element={<Doc19/>}/>
  <Route path='/D20' element={<Doc20/>}/>
</Routes>



   </div>
   
  );
}

export default App;
