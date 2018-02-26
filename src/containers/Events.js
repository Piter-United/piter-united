import React from 'react'
import { withRouteData } from 'react-static'

import Layout from '../components/Layout'
import EventsList from '../components/EventsList'

export default withRouteData(({ events }) => (
  <Layout>
    <div className="container pt-20">
      <EventsList events={events} />
    </div>
  </Layout>
))
