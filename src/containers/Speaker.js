import React from 'react'
import { withRouteData } from 'react-static'

import Layout from '../components/Layout'
import Speaker from '../components/Speaker'

export default withRouteData(({ speaker }) => (
  <Layout>
    <div className="container pt-20">
      <Speaker speaker={speaker} />
    </div>
  </Layout>
))
