import React from 'react'
import { withRouteData, Link } from 'react-static'
import gql from 'graphql-tag'

import client from '../connectors/apollo'
import { eventInfo } from '../../query'

import imgWhite from '../../public/img-white.png'
import imgGreen from '../../public/img-green.png'

import EventDate from '../components/EventDate'
import EventTime from '../components/EventTime'

const PartnersList = ({ list }) =>
  (list.map(({ id, title, site, logo: { url } }) =>
    (<div key={id} className="partner-logo"><a target="_blank" href={site}><img alt={title} src={url} /></a></div>)))


const shareBtns = event => {
  if (typeof document !== 'undefined') {
    document.title = event.name
    setTimeout(() => {
      const el = document.getElementById('my-share')
      window.Ya.share2(el, {
        content: {
          url: location.href,
          title: event.name,
          description: event.name,
          image: 'http://piter-united.ru/img/red/itgm_logo.png',
        },
      })
    }, 1000)
  }
}

export class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = { event: props.event }
  }
  componentWillMount() {
    const { event: { id } } = this.props
    const query = gql`
    query {
      Event(id: "${id}") {
        ${eventInfo}
      }
    }`
    shareBtns(this.props.event)
    client.query({ query })
      .then(({ data: { Event } }) => {
        this.setState({ event: Event })
      })
      .catch(console.log)
  }
  componentWillReceiveProps(props) {
    const { event } = props
    this.setState({ event })
  }
  render() {
    const { event } = this.state
    if (!event) {
      return null
    }
    const partners = [].concat(
      event.goldPartners,
      event.silverPartners,
      event.bronzePartners,
      event.infoPartners)

    return (
      <div className="background">
        <div className="container-fluid navigation">
          <span className="logo"><Link to="/">Piter United</Link></span>
          <div className="share">
            <div
              id="my-share"
              data-services="gplus,facebook,vkontakte,twitter,linkedin"
              data-lang="ru"
              data-size="m"
            />
            <iframe title="Slack" src="https://piter-united.herokuapp.com/iframe" className="__slackin slack" />
          </div>
        </div>
        <div className="container event-info">
          <h1 className="event-title">{event.name}</h1>
          <span className="event-desc">Слет IT-сообществ Петербурга</span>
          <dir className="razd" />
          <span className="event-date"><EventDate start={event.date} end={event.dateEnd} /></span>
          <span className="event-place">{event.address}</span>
          <span className="event-time"><EventTime start={event.date} end={event.dateEnd} /></span>
          {event.registration && <button type="button" onClick={() => window.open(`https://piter-united.timepad.ru/event/${event.timepadId}/`)} className="btn btn-dark reg-button-primary">Регистрация</button>}
          <br />
          <Link to={`/event/${event.id}/talks`} className="btn active programm-button" role="button" aria-pressed="true">программа</Link>
        </div>
        <div className="container-fluid event-partners">
          <div className="partner-logo">
            <span className="partners-title">Партнеры:</span>
          </div>
          <PartnersList list={partners} />
          <div className="partner-logo new">
            <Link to={`/event/${event.id}/partner`} className="btn active new-partner" role="button" aria-pressed="true"> Стать партнером</Link>
          </div>
        </div>
        <div className="background-green d-none d-lg-block">
          <span>&nbsp;</span>
        </div>
        <div className="logo-itgm-left-first d-none d-lg-block">
          <img alt="" src={imgWhite} style={{ width: '300px' }} />
        </div>
        <div className="logo-itgm-left-second d-none d-lg-block">
          <img alt="" src={imgWhite} style={{ width: '150px' }} />
        </div>
        <div className="logo-itgm-right-first d-none d-lg-block">
          <img alt="" src={imgGreen} style={{ width: '200px' }} />
        </div>
        <div className="logo-itgm-right-second d-none d-lg-block">
          <img alt="" src={imgGreen} style={{ width: '150px' }} />
        </div>
      </div>
    )
  }
}

export default withRouteData(({ event }) => <Event event={event} />)
