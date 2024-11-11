import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex px-5 py-4 '>
        <h1 className='text-2xl'>Habit Tracker</h1>
        <nav className='flex justify-between items-center mb-6 ml-auto'>
          <div className='text-xl text-[#033060]'>
          <Link className='mr-3 hover:text-[#184f8a]' href="/">Home</Link>
          <Link className='mr-3 hover:text-[#184f8a]' href="/addhabit">Add habit</Link>
          <Link className='mr-3 hover:text-[#184f8a]' href="/">Progress</Link>
          <Link className='mr-3 hover:text-[#184f8a]' href="/">Settings</Link>
          </div>
      </nav>
    </header>
  )
}

export default Navbar
