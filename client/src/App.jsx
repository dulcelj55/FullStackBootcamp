
import { Route, Routes,  } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import CampDisplay from './Pages/CampsDisplay'
import CampForm from './Pages/CampForm'
import SingleCamp from './Pages/SingleCamp'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
 // go get states data, put in  context
 useEffect(()=>{
  try{
    axios({
      method:"GET",
      url: "/server/states"
    }).then((response)=>{
  // the states datat should be in response.data
  console.log(response.data)
    })

  }catch (err){
    console.error(err)
  }

 
 })

  return (
    <div>
   <Navbar/>
   <Routes>
    <Route path="/" element={<CampDisplay/>}/>
    <Route path="/camps/new" element={<CampForm/>}/>
    <Route path="/camps:campId/" element={<SingleCamp/>}/>
   </Routes>
    </div>
  )
}

export default App
