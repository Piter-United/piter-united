import React from 'react'
import { withRouteData, Link } from 'react-static'

import Layout from '../components/Layout'
import Accordion from '../components/Accordion'

import tw from '../../public/icons/twitter.png'
import tg from '../../public/icons/telegram.png'
import vk from '../../public/icons/vk.png'
import fb from '../../public/icons/facebook.png'
import yt from '../../public/icons/youtube.png'

const Speaker = ({ speaker: { id, name } }) => (
  <Link key={id} to={`/speaker/${id}`}>{name}</Link>
)

const Talk = ({ talk }) => (
  <div className="card-body">
    <h5><Link to={`/event/${talk.event.id}`}>{talk.event.name}</Link></h5>
    {talk.description && <p>{talk.description}</p>}
    {talk.speakers.length > 1 && talk.speakers.map((s, i) => (
      <span key={s.id}>
        <Speaker speaker={s} />
        {i !== (talk.speakers.length - 1) && ', '}
      </span>))}

  </div>
)

const socialIcon = {
  marginRight: "5px",
}

const SocialIcon = ({ type, login }) => {
  if (type === 'twitter') {
    return (<span style={socialIcon}><a target="_blank" href={`https://twitter.com/${login}`}><img src={tw} border="0" /></a></span>)
  } else if (type === "telegram") {
    return (<span style={socialIcon}><a target="_blank" href={`https://t.me/${login}`}><img src={tg} border="0" /></a></span>)
  } else if (type === "vk") {
    return (<span style={socialIcon}><a target="_blank" href={`https://vk.com/${login}`}><img src={vk} border="0" /></a></span>)
  } else if (type === "fb") {
    return (<span style={socialIcon}><a target="_blank" href={`https://facebook.com/${login}`}><img src={fb} border="0" /></a></span>)
  } else if (type === "youtube") {
    return (<span style={socialIcon}><a target="_blank" href={`https://youtube.com/${login}`}><img src={yt} border="0" /></a></span>)
  }
}

const Social = ({ social }) => Object
  .keys(social)
  .map(s => <SocialIcon key={s} type={s} login={social[s]} />)

export default withRouteData(({ speaker }) => (
  <Layout>
    <div className="container pt-20">
      <h1>{speaker.name}</h1>
      {speaker.social && <Social social={speaker.social} />}
      <h4>{speaker.community.map(c => c.name).join(', ')}</h4>
      <Accordion items={speaker.talks.map(t => ({ title: t.subject, data: <Talk talk={t} /> }))} />
    </div>
  </Layout>
))
