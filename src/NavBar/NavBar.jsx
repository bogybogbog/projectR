import axios from 'axios'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <div className='bg-red-600 p-4 text-slate-700 fixed top-0 right-0 left-0'>
      <ul className='flex gap-5'>
        <li><NavLink to="">Home</NavLink></li>
        <li><NavLink to="/projectR/parent">Parent</NavLink></li>
        <li><NavLink to="/projectR/about">About</NavLink></li>
      </ul>
    </div>
  )
}
