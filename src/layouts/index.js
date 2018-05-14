import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
<<<<<<< HEAD
import './gatstrap.scss'

=======
import Navbar from './../components/navbar'
>>>>>>> a61d3cb1a2b40b0a9322144d535af46a1efedcd8
import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
<<<<<<< HEAD
=======
    <Navbar />
>>>>>>> a61d3cb1a2b40b0a9322144d535af46a1efedcd8
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
<<<<<<< HEAD
    <a href="#" className="btn btn-primary">Bootstrap</a>
=======
>>>>>>> a61d3cb1a2b40b0a9322144d535af46a1efedcd8
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
