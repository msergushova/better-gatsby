import React from 'react'
import Link from 'gatsby-link'
<<<<<<< HEAD
import Navbar from './navbar'
=======
>>>>>>> a61d3cb1a2b40b0a9322144d535af46a1efedcd8

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
<<<<<<< HEAD
      <Navbar />
=======
>>>>>>> a61d3cb1a2b40b0a9322144d535af46a1efedcd8
    </div>
  </div>
)

export default Header
