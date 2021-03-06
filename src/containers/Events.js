import React from 'react'
import { withRouteData } from 'react-static'

import Layout from '../components/Layout'
import EventList from '../components/EventList'

export default withRouteData(({ events }) => (
  <Layout>
    <div className="container pt-20">
      <EventList events={events} />
    </div>
  </Layout>
))
