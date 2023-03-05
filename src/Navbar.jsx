import React from 'react'
import {FaReact} from "react-icons/fa";

const Navbar = () => {
  return (
	<div className='bg-gradient-to-r from-lime-300 via-green-400 to-cyan-400 p-4 flex items-center justify-around'>
      <FaReact size={70}/>
      <h1 className='text-3xl font-custom'>React Projects</h1>
    </div>
  )
}

export default Navbar