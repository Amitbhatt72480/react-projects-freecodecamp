import React from 'react'
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const Home = () => {
  return (
	<>
	<Navbar />
	<div className='grid grid-cols-3 bg-gray-400 w-40 rounded-xl px-3 py-4 m-20'>
      <Link to="/birthday" className=''>Birthday reminder</Link>
    </div>
	<div className='grid grid-cols-3 bg-gray-400 w-40 rounded-xl px-3 py-4 m-20'>
      <Link to="/tours" className=''>Tours</Link>
    </div>
    <div className='grid grid-cols-3 bg-gray-400 w-40 rounded-xl px-3 py-4 m-20'>
      <Link to="/reviews" className=''>Reviews</Link>
    </div>
	</>
  )
}

export default Home