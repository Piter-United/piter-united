import React from 'react'
import { withRouteData } from 'react-static'

import Event from '../components/Event'

export default withRouteData(({ event }) => <Event event={event} />)
