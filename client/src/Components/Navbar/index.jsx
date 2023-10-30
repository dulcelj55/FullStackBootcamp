import { Link } from 'react-router-dom'
import './index.css'
import {useState} from 'react'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Camps</Link>
        <br/>
        <Link to="/camps/new">Make a new Camp</Link>


    </div>
  )
}

export default Navbar