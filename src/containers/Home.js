import React from 'react'
import { withRouteData } from 'react-static'

import Layout from '../components/Layout'
import CommunityList from '../components/CommunityList'
import CurrentEvent from '../components/CurrentEvent.js'

export default withRouteData(({ communities }) => (
  <Layout>
    <div className="container pt-20">
      <CurrentEvent />
      <CommunityList communities={communities} />
    </div>
  </Layout>))
