import React from 'react'
import { withRouteData } from 'react-static'

import Layout from '../components/Layout'
import CommunityList from '../components/CommunityList'
import CurrentEvent from '../components/CurrentEvent.js'

export default withRouteData(({ communities }) => (
  <div className="container pt-20">
    {/*<CurrentEvent />*/}
    <CommunityList communities={communities} />
  </div>
))
