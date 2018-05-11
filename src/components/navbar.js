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

