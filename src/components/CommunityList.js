import React from 'react'
import gql from 'graphql-tag'

import client from '../connectors/apollo'

const cardStyle = {
  width: '18rem',
  marginRight: '5px',
  marginLeft: '5px',
  marginBottom: '5px',
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
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {list.map(({ id, name, site, description, logo }) => (
            <div key={id} className="card" style={cardStyle}>
              {logo && <img className="card-img-top" src={logo.url} alt={name} />}
              <div className="card-body">
                <h5 className="card-title"><a href={site} target="_blank">{name}</a></h5>
                {description && <p className="card-text">{description}</p>}
              </div>
            </div>))}
        </div>
        {loading && <span>loading...</span>}
      </div>
    )
  }
}
