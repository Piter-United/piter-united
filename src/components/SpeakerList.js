import React from 'react'
import { Link } from 'react-static'
import gql from 'graphql-tag'

import client from '../connectors/apollo'

import Accordion from './Accordion'

const query = gql`
query {
  allSpeakers {
    id
    name
    company {
      id
      name
    }
    community {
      id
      name
      site
    }
  }
}`

export default class SpeakerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: {},
      loading: true,
    }
  }

  componentWillMount() {
    this.groupByCommunity(this.props.speakers)
    client.query({ query })
      .then(({ data: { allSpeakers } }) => {
        this.setState({ loading: false })
        this.groupByCommunity(allSpeakers)
      })
      .catch(err => {
        this.setState({ loading: false })
        console.log(err)
      })
  }

  groupByCommunity(speakers) {
    const list = {}
    speakers.forEach(s => {
      s.community.forEach(c => {
        if (c.id in list) {
          list[c.id].speakers.push(s)
        } else {
          list[c.id] = Object.assign({}, c, { speakers: [s] })
        }
      })
    })
    this.setState({ list })
  }

  company({ id, name }) {
    return <Link key={id} to={`/company/${id}`}>{name}</Link>
  }

  speaker({ id, name, company }) {
    return (
      <div key={id} style={{ marginLeft: '20px', marginBottom: '10px' }}>
        <h5>
          <Link to={`/speaker/${id}`}>{name}</Link>
          &nbsp;
          {company.map((c, i) => (
            <span key={c.id}>
              {i === 0 && '('}
              {this.company(c)}
              {i === (company.length - 1) ? ')' : ', '}
            </span>))}
        </h5>
      </div>
    )
  }

  community(id) {
    const { list } = this.state
    const { name, speakers } = list[id]

    return {
      title: name,
      data: (
        <div className="card-body">
          {speakers.map(s => this.speaker(s))}
        </div>
      ),
    }
  }

  itemsList() {
    const { list } = this.state
    return Object.keys(list).map(id => this.community(id))
  }

  render() {
    const { loading } = this.state
    return (
      <div>
        <h1>Speaker list</h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Accordion items={this.itemsList()} />
        </div>
        {loading && <span>loading...</span>}
      </div>
    )
  }
}
