import React from 'react'
import { Redirect, Link } from 'react-static'
import { isFuture, isToday } from 'date-fns'
import gql from 'graphql-tag'

import client from '../connectors/apollo'

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
    date
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
        <h1 style={{ marginTop: '20px' }}>
          {redirect && !window.redirected && <Redirect to={`/event/${event.id}`} />}
          Next event: <Link to={`/event/${event.id}`}>{event.name}</Link>
        </h1>
      )
    }
    return null
  }
}
