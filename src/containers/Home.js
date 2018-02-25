import React from 'react'
import { withRouteData, Redirect, Link } from 'react-static'
import { isFuture, isToday } from 'date-fns'
import gql from 'graphql-tag'

import client from '../connectors/apollo'
import Layout from '../components/Layout'

export class CurrentEvent extends React.Component {
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
      }, 5000)
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

export default withRouteData(({ communities }) => (
  <Layout>
    <div className="container pt-20">
      <CurrentEvent />
      <h2>Community list</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {communities.map(({ id, name, site, description, logo }) => (
          <div
            key={id}
            className="card"
            style={{
              width: '18rem',
              marginRight: '5px',
              marginLeft: '5px',
              marginBottom: '5px' }}
          >
            <img className="card-img-top" src={logo.url} alt={name} />
            <div className="card-body">
              <h5 className="cart-title"><a href={site} target="blank">{name}</a></h5>
              {description && <p className="card-text">{description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>))
