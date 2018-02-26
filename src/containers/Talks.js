import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouteData, Link } from 'react-static'

import Layout from '../components/Layout'
import Text from '../components/Text'
import EventDate from '../components/EventDate'

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
    {company.length && <span className="theme-speaker-company"> ({company[0].name})</span>
    }
  </span>
)

const Talk = ({ id, time, subject, description, speakers }) => (
  <tr key={id}>
    <th className="row theme-timing">{time}</th>
    <td>
      <span className="theme-title">{subject}</span>
      {description && <span className="theme-desc"><Text text={description} /></span>}
      {speakers.map((s, i) => <span key={i} style={{ marginRight: '10px' }}><Speaker {...s} />{i < (speakers.length - 1) && ',' }</span>)}
    </td>
  </tr>
)

const TalksList = ({ talks, show }) => {
  const cls = ['collapse']
  if (show) {
    cls.push('show')
  }
  return (
    <div className={cls.join(' ')} aria-labelledby="headingOne">
      <div className="card-body">
        <table className="table">
          <tbody>
            {talks.map(Talk)}
          </tbody>
        </table>
      </div>
    </div>)
}

class CommunityList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: [],
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
        })
      })
      st.community = data
    }
    if (st) {
      this.setState(st)
    }
  }

  toggle(id) {
    const { opened } = this.state
    if (!opened.includes(id)) {
      opened.push(id)
      this.setState({ opened })
    } else {
      const idx = opened.indexOf(id)
      opened.splice(idx, 1)
      this.setState({ opened })
    }
  }

  render() {
    const { community, opened, loading, error } = this.state
    if (loading) {
      return (<p>Loading...</p>)
    } else if (error) {
      return (<p>Error!</p>)
    }
    return Object.keys(community).map(id => (
      <div className="card" key={id}>
        <div className="card-header">
          <h5 className="mb-0">
            <button
              onClick={() => this.toggle(id)}
              className="btn programm-item"
              data-toggle="collapse"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {opened.includes(id) ? <span className="oi oi-chevron-bottom" /> : <span className="oi oi-chevron-right" />}
              <span className="programm-item-title">{community[id].name}</span>
            </button>
          </h5>
        </div>
        <TalksList talks={community[id].talks} show={opened.includes(id)} />
      </div>))
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
