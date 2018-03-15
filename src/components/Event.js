import React from 'react'
import { Link } from 'react-static'
import gql from 'graphql-tag'

import client from '../connectors/apollo'
import { eventInfo } from '../../query'

import imgWhite from '../../public/img-white.png'
import imgGreen from '../../public/img-green.png'

import EventDate from '../components/EventDate'
import EventTime from '../components/EventTime'
import Text from '../components/Text'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ show: !this.state.show })
  }

  render() {
    const { id, slug, site, url, title, body } = this.props
    const { show } = this.state
    const styles = {}
    if (id === 'cje04towv5rah0197k9el9exj' && slug === 'itgm12') {
      styles.height = '50px'
    }

    const classes = ['modal', 'fade']
    let display = 'none'
    if (show) {
      classes.push('show')
      display = 'block'
    }

    return [
      <div key={`${id}-0`} style={{ display }}>
        <div className="modal-backdrop" style={{ opacity: '0.6' }} />
        <div
          className={classes.join(' ')}
          tabIndex="-1"
          role="dialog"
          style={{ display }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title || 'Модальное окно'}</h5>
                <button type="button" className="close" onClick={this.toggle} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ textAlign: 'left' }}>
                <Text text={body || 'Text'} />
                <a href={site} target="_blank">{site}</a>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.toggle}>Закрыть</button>
              </div>
            </div>
          </div>
        </div>
      </div>,
      <a role="button" tabIndex="-1" key={`${id}-1`} style={{ cursor: 'pointer' }} onClick={this.toggle}><img style={styles} alt={name} src={url} /></a>,
    ]
  }
}

const PartnersList = ({ slug, list, platinum }) => (
  [platinum.map(({ id, name, description, site, logo: { url } }) => (
    <div key={id} className="partner-logo">
      <Modal id={id} slug={slug} title={name} site={site} url={url} body={description} />
    </div>)),
  list.map(({ id, name, site, logo: { url } }) => {
    const styles = {}
    return (<div key={id} className="partner-logo"><a target="_blank" href={site}><img style={styles} alt={name} src={url} /></a></div>)
  })])


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
          image: (event.logo && event.logo.url) ? event.logo.url : null,
        },
      })
    }, 1000)
  }
}


export default class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: props.event,
      loading: true,
    }
  }
  componentWillMount() {
    const { event: { id } } = this.props
    const query = gql`
    query {
      Event(id: "${id}") {
        ${eventInfo}
      }
    }`
    client.query({ query })
      .then(({ data: { Event } }) => {
        this.setState({ event: Event })
        shareBtns(Event || this.props.event)
      })
      .catch(err => {
        this.setState({ loading: false })
        console.log(err)
      })
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
    const partners = []
      .concat(
        event.goldPartners,
        event.silverPartners,
        event.bronzePartners,
        event.infoPartners)
      .filter(p => p.logo && p.logo.url)

    return (
      <div className="event">
        <div className="container-fluid navigation">
          <Link className="logo" to="/">Piter United</Link>
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
        <div className="container-fluid event-info background-green">
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
          <h1 className="event-title">{event.name}</h1>
          <span className="event-desc">Слет IT-сообществ Петербурга</span>
          <dir className="razd" />
          <span className="event-date"><EventDate start={event.date} end={event.dateEnd} /></span>
          <span className="event-place">{event.address}</span>
          <span className="event-time"><EventTime start={event.date} end={event.dateEnd} /></span>
          {event.registration && <button type="button" onClick={() => window.open(`https://piter-united.timepad.ru/event/${event.timepadId}/`)} className="btn btn-dark reg-button-primary">Регистрация</button>}
          <br />
          <Link to={`/event/${event.slug}/talks`} className="btn active programm-button" role="button" aria-pressed="true">программа</Link>
        </div>
        <div className="container-fluid event-partners">
          <div className="partner-logo">
            <span className="partners-title">Партнеры:</span>
          </div>
          <PartnersList slug={event.slug} platinum={event.platinumPartners} list={partners} />
          <div className="partner-logo new">
            <Link to={`/event/${event.slug}/partner`} className="btn active new-partner" role="button" aria-pressed="true"> Стать партнером</Link>
          </div>
        </div>
      </div>
    )
  }
}
