import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouteData, Link } from 'react-static'

import Layout from '../components/Layout'
import Accordion from '../components/Accordion'
import Text from '../components/Text'
import EventDate from '../components/EventDate'

function compareByTime(a, b) {
  if (a.time < b.time) {
    return -1
  }
  if (a.time > b.time) {
    return 1
  }
  return 0
}


const TalksQuery = gql`
query GetCommunityEventTalks($id: ID!){
  allCommunityEventTalks(filter: {
    event: {id: $id}
  }) {
    id
    time
    subject
    description
    community {
      id
      name
      logo {
        url
      }
    }
    speakers {
      id
      name
      social
      company(last: 1) {
        id
        name
        logo {
          url
        }
      }
      photo {
        url
      }
    }
  }
}`

const Speaker = ({ id, name, company }) => (
  <span key={id}>
    <span className="theme-speaker">{name}</span>
    {company.length > 0 && <span className="theme-speaker-company"> ({company[0].name})</span>
    }
  </span>
)

const Talk = ({ id, time, subject, description, speakers }) => (
  <tr key={id}>
    <th className="row theme-timing">{time}</th>
    <td style={{ width: '100%' }}>
      <span className="theme-title">{subject}</span>
      {description && <span className="theme-desc"><Text text={description} /></span>}
      {speakers.map((s, i) => <span key={i} style={{ marginRight: '10px' }}><Speaker {...s} />{i < (speakers.length - 1) && ',' }</span>)}
    </td>
  </tr>
)

const TalksList = ({ talks }) => (
  <table className="table">
    <tbody>
      {talks.map(Talk)}
    </tbody>
  </table>
)

class CommunityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      community: {},
    }
  }
  componentWillReceiveProps(next) {
    const pr = this.props.data.allCommunityEventTalks || []
    const nx = next.data.allCommunityEventTalks || []
    let st = null
    if (next.data) {
      st = {}
      st.loading = next.data.loading
      st.error = next.data.error
    }
    if (pr !== nx) {
      const data = {}
      nx.forEach(t => {
        t.community.forEach(c => {
          if (c.id in data) {
            data[c.id].talks.push(t)
          } else {
            data[c.id] = Object.assign({}, c, { talks: [t] })
          }
          data[c.id].talks.sort(compareByTime)
        })
      })
      st.community = data
    }
    if (st) {
      this.setState(st)
    }
  }

  render() {
    const { community, loading, error } = this.state
    if (loading) {
      return (<p>Loading...</p>)
    } else if (error) {
      return (<p>Error!</p>)
    }
    const items = Object.keys(community).map(id => (
      {
        title: community[id].name,
        data: <TalksList talks={community[id].talks} />,
      }
    ))
    return <Accordion items={items} />
  }
}

const Talks = graphql(TalksQuery, { options: ({ id }) => ({ variables: { id } }) })(CommunityList)

const BackBtn = event => ([
  <div key={1} className="back">
    <Link to={`/event/${event.id}`} className="btn btn-light back-button" activeClassName="null" role="button">
      <span className="oi oi-arrow-left" />
      <span style={{ paddingLeft: '12px', fontWeight: '600' }}>Назад</span>
    </Link>
  </div>,
  <div key={2} className="event-badge">
    <div className="badge-text">
      <span className="badge-title">{event.name}</span>
      <br />
      <span className="badge-desc"><EventDate start={event.date} end={event.dateEnd} />, {event.address}</span>
    </div>
    {event.registration && <a href={`https://piter-united.timepad.ru/event/${event.timepadId}/`} target="blank" role="button" className="btn btn-dark reg-button-badge">Регистрация</a>}
  </div>])

export default withRouteData(({ event }) => (
  <Layout buttons={BackBtn(event)} classes={['programm-list']}>
    <div className="container programm-list">
      <span className="programm-title">Программа</span>
      <Talks id={event.id} />
    </div>
  </Layout>
))
