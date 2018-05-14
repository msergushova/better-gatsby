<<<<<<< HEAD
import React from 'react'
import Link from 'gatsby-link'
import './navbar.css'

export default () => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

=======
import React from 'react';
import Link from 'gatsby-link';
const Navbar = () => {
  return (
      <nav>
          <li> <Link to='/'>Home</Link></li>
          <li> <Link to='/about'>About</Link></li>
          <li> <Link to='/contact'>Contact</Link></li>
     </nav>
)
}

export default Navbar;
>>>>>>> a61d3cb1a2b40b0a9322144d535af46a1efedcd8
