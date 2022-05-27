import React from 'react'
import {Link} from 'react-router-dom';
function NavBar() {
  return (
  
<nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
  <h2 className='text-secondary'>Private Contact</h2>
  <div className='text-secondary'>
      <Link to='/' style={{textDecoration:'none'}}><b className='me-3 text-secondary'>Home</b></Link>
     <Link to='favourite' style={{textDecoration:'none'}}><b className='me-5 text-secondary'>Favourite</b></Link>
  </div>
  </div>
</nav>
  )
}

export default NavBar
