import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center bg-black text-white'>
      <div className='text-center items-center p-4 text-xl mx-auto rounded-lg'>Made by Sudhanshu Mishra</div>
      <div className='flex justify-center'>
            <Link to="/dashboard">
                <button className="bg-black hover:bg-white hover:text-black p-5 w-max border m-2 rounded-lg">Dashboard Page</button>
            </Link>
            <Link to="/pricing">
                <button className="bg-black hover:bg-white hover:text-black p-5 w-max border m-2 rounded-lg">Pricing Page</button>
            </Link>
      </div>
    </div>
  )
}

export default Home
