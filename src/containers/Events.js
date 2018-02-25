import React from 'react'
import { withRouteData, Link } from 'react-static'

import Layout from '../components/Layout'

export default withRouteData(({ events }) => (
  <Layout>
    <h1>Events list</h1>
    <br />
    <ul>
      {events.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/event/${id}/`}>{name}</Link>
        </li>
      ))}
    </ul>
  </Layout>
))
