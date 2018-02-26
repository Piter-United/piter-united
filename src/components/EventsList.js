import React from 'react'
import gql from 'graphql-tag'
import { Link } from 'react-static'

import client from '../connectors/apollo'

const query = gql`
query {
  allEvents(orderBy: date_DESC) {
    id
    name
  }
}`

export default class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.events,
      loading: true,
    }
  }
  componentWillMount() {
    client.query({ query })
      .then(({ data: { allEvents } }) => {
        this.setState({ list: allEvents, loading: false })
      })
      .catch(err => {
        this.setState({ loading: false })
        console.log(err)
      })
  }
  render() {
    const { list, loading } = this.state
    return (
      <div>
        <h1>Events list</h1>
        <br />
        <ul>
          {list.map(({ id, name }) => (
            <li key={id}>
              <Link to={`/event/${id}/`}>{name}</Link>
            </li>
          ))}
        </ul>
        {loading && <span>loading...</span>}
      </div>
    )
  }
}
