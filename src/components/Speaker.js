import React from 'react'
import { Link } from 'react-static'
import gql from 'graphql-tag'

import client from '../connectors/apollo'
import Accordion from './Accordion'

import tw from '../../public/icons/twitter.png'
import tg from '../../public/icons/telegram.png'
import vk from '../../public/icons/vk.png'
import fb from '../../public/icons/facebook.png'
import yt from '../../public/icons/youtube.png'

const socialIcon = {
  marginRight: '5px',
}

const query = id => gql`
query {
  Speaker(id: "${id}") {
    id
    name
    social
    company {
      id
      name
    }
    talks {
      id
      subject
      description
      event {
        id
        name
      }
      speakers {
        id
        name
      }
      community {
        id
        name
      }
    }
    community {
      id
      name
      site
    }
  }
}`

export default class Speaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { speaker: props.speaker, loading: true }
  }

  componentWillMount() {
    const { speaker: { id } } = this.state
    client.query({ query: query(id) })
      .then(({ data: { Speaker } }) => {
        this.setState({ speaker: Speaker })
      })
      .catch(err => {
        this.setState({ loading: false })
        console.log(err)
      })
  }

  speaker({ id, name }) {
    return <Link key={id} to={`/speaker/${id}`}>{name}</Link>
  }

  talk(talk) {
    return (
      <div className="card-body">
        <h5><Link to={`/event/${talk.event.id}`}>{talk.event.name}</Link></h5>
        {talk.description && <p>{talk.description}</p>}
        {talk.speakers.length > 1 && talk.speakers.map((s, i) => (
          <span key={s.id}>
            {this.speaker(s)}
            {i !== (talk.speakers.length - 1) && ', '}
          </span>))}

      </div>
    )
  }

  icons(type, login) {
    if (type === 'twitter') {
      return (
        <span style={socialIcon}>
          <a target="_blank" href={`https://twitter.com/${login}`}>
            <img alt="twitter" src={tw} border="0" />
          </a>
        </span>)
    } else if (type === 'telegram') {
      return (
        <span style={socialIcon}>
          <a target="_blank" href={`https://t.me/${login}`}>
            <img alt="telegram" src={tg} border="0" />
          </a>
        </span>)
    } else if (type === 'vk') {
      return (
        <span style={socialIcon}>
          <a target="_blank" href={`https://vk.com/${login}`}>
            <img alt="Vkontakte" src={vk} border="0" />
          </a>
        </span>)
    } else if (type === 'fb') {
      return (
        <span style={socialIcon}>
          <a target="_blank" href={`https://facebook.com/${login}`}>
            <img alt="facebook" src={fb} border="0" />
          </a>
        </span>)
    } else if (type === 'youtube') {
      return (
        <span style={socialIcon}>
          <a target="_blank" href={`https://youtube.com/${login}`}>
            <img alt="youtube" src={yt} border="0" />
          </a>
        </span>)
    }
  }

  social(social) {
    return Object
      .keys(social)
      .map((s, i) => <span key={i}>{this.icons(s, social[s])}</span>)
  }

  render() {
    const { speaker } = this.state
    const items = speaker.talks.map(t => ({ title: t.subject, data: this.talk(t) }))
    return (
      <div>
        <h1>{speaker.name}</h1>
        {speaker.social && this.social(speaker.social)}
        <h4 style={{ marginTop: '10px' }}>{speaker.community.map(c => c.name).join(', ')}</h4>
        <Accordion items={items} />
      </div>
    )
  }
}
