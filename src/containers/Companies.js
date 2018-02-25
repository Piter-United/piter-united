import React from 'react'
import { withRouteData, Link } from 'react-static'

import Layout from '../components/Layout'

export default withRouteData(({ companies }) => (
  <Layout>
    <h1>Company list</h1>
    <br />
    <ul>
      {companies.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/company/${id}/`}>{name}</Link>
        </li>
      ))}
    </ul>
  </Layout>
))
