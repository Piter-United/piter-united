import React from 'react'
import gql from 'graphql-tag'

import client from '../connectors/apollo'

import CurrentEvent from './CurrentEvent'

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

const shareBtns = () => {
  if (typeof document !== 'undefined') {
    document.title = "Piter United"
    setTimeout(() => {
      const el = document.getElementById('pu-share')
      window.Ya.share2(el, {
        content: {
          url: "http://piter-united.ru",
          title: "Piter United",
          description: "Объединение IT-сообществ Петербурга",
          image: null,
        },
      })
    }, 1000)
  }
}

export default class CommunityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.communities,
      loading: true,
    }
  }

  componentWillMount() {
    shareBtns()
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
      <div className="container">
        <div className="container main-nav">
          <div>
            <span className="logo-main">Piter United</span>
            <span>Объединение IT-сообществ Петербурга</span>
          </div>
          <div className="share">
            <div
              id="pu-share"
              data-services="gplus,facebook,vkontakte,twitter,linkedin"
              data-lang="ru"
              data-size="m"
            />
            <iframe title="Slack" src="https://piter-united.herokuapp.com/iframe" className="__slackin slack" />
          </div>
      </div>
        <div className="row">
          <div className="community-list col-md-8">
            <h1 className="community-list-title">Сообщества (28)</h1>
            <div className="razd-left"></div>
            <ul className="list-unstyled">            
              {list.map(({ id, name, site, logo, description }) => (
                <li key={id} className="media">
                  {logo && <img src={logo.url} style={{ maxWidth: '64px', maxHeight: '64px'}} alt={name} />}
                  {/* <img className="comm-logo mr-3" src={logo.url} width="64px" alt="Generic placeholder image" /> */}
                  <div className="media-body">
                    <a className="community-title-link link-unstyled" target="_blank" href={site}>
                      {<h5 className="mt-0 mb-1 community-title"> {name} </h5>}
                    </a>
                    { <span> {description} </span> }
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h1 className="community-list-title">События (1)</h1>
            <CurrentEvent />
          </div>
        </div>
        {/*        <div style={blockStyle}>
          {list.map(({ id, name, site, logo }) => (
            <div key={id} className="card" style={cardStyle}>
              <a target="_blank" href={site}>
                {logo && <img src={logo.url} style={{ maxWidth: '300px', maxHeight: '300px'}} alt={name} />}
                {!logo && <h5 className="card-title">{name}</h5>}
              </a>
            </div>))}
        </div>*/}
        {loading && <span>loading...</span>}
      </div>
    )
  }
}
