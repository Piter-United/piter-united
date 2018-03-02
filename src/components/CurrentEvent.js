import React from 'react'
import { Redirect, Link } from 'react-static'
import { isFuture, isToday } from 'date-fns'
import gql from 'graphql-tag'

import client from '../connectors/apollo'

import EventDate from './EventDate'

export default class CurrentEvent extends React.Component {
  constructor() {
    super()
    this.state = { event: null }
  }
  componentWillMount() {
    const query = gql`
query {
  allEvents(
    first: 1
    orderBy: date_DESC
  ) {
    id
    name
    slug
    address
    description
    date
    dateEnd
  }
}`
    client.query({ query })
      .then(({ data: { allEvents } }) => {
        const event = allEvents[0]
        if (event && (isFuture(event.date) || isToday(event.date))) {
          this.setState({ event })
        }
      })
      .catch(console.log)
  }

  componentWillUpdate(np, ns) {
    const { event, int } = ns
    if (event && event.id && !window.redirected && !int) {
      const int = setInterval(() => {
        clearInterval(int)
        setTimeout(() => {
          window.redirected = true
        }, 1200)
        this.setState({ redirect: true })
      }, 500)
      setTimeout(() => this.setState({ int }), 100)
    }
  }

  componentWillUnmount() {
    if (this.state.int) {
      clearInterval(this.state.int)
    }
  }
  render() {
    const { event, redirect } = this.state
    if (event) {
      return (
        <div className="card card-events">
          <div className="card-body">
            {<h5 className="card-title"> <strong>{event.name}</strong></h5>}
            <h6 className="card-subtitle mb-2 text-muted"><EventDate start={event.date} end={event.dateEnd} />, {event.address}</h6>
            <p className="card-text">{event.description}</p>
            {redirect && !window.redirected && <Redirect to={`/event/${event.slug}`} />}
            <Link to={`/event/${event.id}`}>Подробнее...</Link>
            <img alt="" src="img-white.png" className="event-img" />
          </div>
        </div>
      )
    }
    return null
  }
}
