import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>
          <div className='col'>
          <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold" to="/">
    AI-Image Generation
    </Link>
    <Link to='/create' className='create-btn px-3 py-1 '>Create</Link>
  </div>
</nav>

          </div>
        </div>
      </div>
   </>
  )
}

export default NavBar