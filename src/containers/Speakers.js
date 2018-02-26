import React from 'react'
import { withRouteData } from 'react-static'

import Layout from '../components/Layout'
import SpeakerList from '../components/SpeakerList'

export default withRouteData(({ speakers }) => (
  <Layout>
    <div className="container pt-20">
      <SpeakerList speakers={speakers} />
    </div>
  </Layout>
))
