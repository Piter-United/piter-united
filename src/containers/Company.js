import React from 'react'
import { withRouteData, Link } from 'react-static'

import Layout from '../components/Layout'

export default withRouteData(({ company: { name, site, logo } }) => (
  <Layout>
    <Link to="/company">{'<'} Back</Link>
    <br />
    <h1>{(logo) ? <img alt={name} src={logo.url} height="30" /> : ''} {name}</h1>
    <p>{site}</p>
    <br />
  </Layout>
))
