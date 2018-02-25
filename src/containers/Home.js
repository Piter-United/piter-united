import React from 'react'
import { withRouteData, Redirect, Link } from 'react-static'

import Layout from '../components/Layout'

export class Redir extends React.Component {
  componentWillMount() {
    if (this.props.id) {
      const int = setInterval(() => {
        clearInterval(int)
        this.setState({ redirect: true })
      }, 5000)
      this.setState({ int })
    }
  }
  componentWillUnmount() {
    clearInterval(this.state.int)
  }
  render() {
    const { id } = this.props
    const { redirect } = this.state
    if (redirect && !window.redirected) {
      window.redirected = true
      return <Redirect to={`/event/${id}`} />
    }
    return null
  }
}

export default withRouteData(({ event, communities }) => (
  <Layout>
    <div className="container pt-20">
      {event && <h1 style={{ marginTop: '20px' }}>Next event: <Link to={`/event/${event.id}`}>{event.name}</Link></h1>}
      <h2>Community list</h2>
      <Redir id={event.id} />
      <div style={{
        display: 'flex',
        flexDirection: 'row' }}
      >
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
