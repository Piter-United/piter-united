import React from 'react'
import gql from 'graphql-tag'

import client from '../connectors/apollo'

const cardStyle = {
  width: '300px',
  maxWidth: '300px',
  maxHeight: '300px',
  height: '300px',
  overflow: 'hidden',
  marginBottom: '20px',
  justifyContent: 'center',
  alignItems: 'center',
}

const blockStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
}

const query = gql`
query {
  allCommunities {
    id
    name
    description
    site
    logo {
      url
    }
  }
}`

export default class CommunityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.communities,
      loading: true,
    }
  }

  componentWillMount() {
    client.query({ query })
      .then(({ data: { allCommunities } }) => {
        this.setState({ list: allCommunities, loading: false })
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
        <h1>Community list</h1>
        <div style={blockStyle}>
          {list.map(({ id, name, site, logo }) => (
            <div key={id} className="card" style={cardStyle}>
              <a target="_blank" href={site}>
                {logo && <img src={logo.url} style={{ maxWidth: '300px', maxHeight: '300px'}} alt={name} />}
                {!logo && <h5 className="card-title">{name}</h5>}
              </a>
            </div>))}
        </div>
        {loading && <span>loading...</span>}
      </div>
    )
  }
}
