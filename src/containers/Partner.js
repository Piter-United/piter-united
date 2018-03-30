import React from 'react'
import { withRouteData, Link } from 'react-static'

import amount from '../../public/amount.png'
import participants from '../../public/participants.png'

import Layout from '../components/Layout'
import EventDate from '../components/EventDate'

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
    <a href="mailto:piterunited@gmail.com" role="button" className="btn btn-dark reg-button-badge">стать партнером</a>
  </div>])

export default withRouteData(({ event }) => (
  <Layout buttons={BackBtn(event)}>
    <div className="container">
      <div className="alert alert-warning" role="alert">
        Если вы уже знакомы с мероприятием и форматом, можете пропустить информацию о мероприятии и перейти сразу к изучению <a href="#package" className="itgm-styled-link">партнерских пакетов</a>.
      </div>
    </div>
    <div className="container event-about">
      <span className="partners-title-1">О мероприятии</span>
      <dir className="razd-left" />
      <div className="row">
        <div className="col-lg">
          <p>
            <b>Участники:</b> <br />
            Сердцем мероприятия являются IT-сообщества Петербурга.
            В каждому слете участвует от 15 до 20 IT-сообществ.
            У каждого сообщества свой "островок" и уникальная программа.
          </p>
        </div>
        <div className="col-lg">
          <p>
            <b>Формат:</b><br />
            Каждый слет это от 15 до 20 параллельных потоков.
            Каждое сообщество готовит свою уникальную программу:
            доклады, круглые столы, мастер-классы и т.д.
          </p>
        </div>
        <div className="col-lg">
          <p>
            <b>Атмосфера:</b><br />
            Посетители мероприятия могут свободно перемещаться между островками сообществ,
            общаться и обмениваться опытом. Знакомятся и становятся частью городских сообществ.
          </p>
        </div>
      </div>
    </div>
    <div className="container-fluid itgm-video">
      <iframe title="Video" src="https://player.vimeo.com/video/163001915?title=0&byline=0&portrait=0" width="100%" height="484" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen />
    </div>

    <div className="container event-about">
      <span className="partners-title-1">Статистика</span>
      <dir className="razd-left" />
      <div className="row">
        <div className="col-lg">
          <br />
          <img alt="" src={amount} style={{ width: '100%' }} />
        </div>
        <div className="col-lg">
          <br />
          <img
            alt=""
            src={participants}
            style={{
              width: '80%',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block' }}
          />
        </div>
      </div>
    </div>
    <div className="container event-about">
      <span className="partners-title-1">Интересные ссылки</span>
      <dir className="razd-left" />
      <ul className="list-group list-group-flush itgm-links">
        <li className="list-group-item">
          <a href="" target="_blank">Шаблон партнерского договора</a>
        </li>
        <li className="list-group-item">
          <a href="" target="_blank">Партнерское предложение в формате PDF</a>
        </li>
        <li className="list-group-item">
          <a href="https://medium.com/@piterunited" rel="noopener noreferrer" target="_blank">Пост-релизы по предыдущим слетам</a>
        </li>
        <li className="list-group-item">
          <a href="https://vk.com/albums-71691819" rel="noopener noreferrer" target="_blank">Фото-отчеты по предыдущим слетам</a>
        </li>
        <li className="list-group-item">
          <a href="https://vimeo.com/163001915" rel="noopener noreferrer" target="_blank">Промо-ролик с IT Global Meetup #7</a>
        </li>
        <li className="list-group-item">
          <a href="https://www.youtube.com/watch?v=PbxTYPbzef0" rel="noopener noreferrer" target="_blank">Промо-ролик с IT Global Meetup #3</a>
        </li>
      </ul>
    </div>
    <div className="container event-about" id="package">
      <span className="partners-title-1">Партнерские пакеты</span>
      <dir className="razd-left" />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Возможности</th>
            <th scope="col" className="package">Bronze</th>
            <th scope="col" className="package">Silver</th>
            <th scope="col" className="package">Gold</th>
            <th scope="col" className="package">Platinum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Анонс о партнере на онлайн площадках Piter United</td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Логотип компании на сайте мероприятия</td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Логотип компании на печатной программе мероприятия</td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Логотип на слайдах на открытии мероприятия</td>
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Расширенный анонс о партнере на площадках Piter United</td>
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr className="focus">
            <td>Размещение одного Roll-Up в холле мероприятия</td>
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Размещение логотипа компании на Press-Wall</td>
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Публичная благодарность на открытии мероприятия</td>
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr className="focus">
            <td>Место для размещения корпоративного островка</td>
            <td className="package" />
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Размещение логотипа компании на промо-футболках</td>
            <td className="package" />
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Возможность рассказать о компании на открытии (не более 2-х мин)</td>
            <td className="package" />
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Реклама компании на печатной программе мероприятия</td>
            <td className="package" />
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr className="focus">
            <td>Выступление представителя компании с докладом на островках</td>
            <td className="package" />
            <td className="package" />
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Возможность размещения Roll-Ups во всех залах</td>
            <td className="package" />
            <td className="package" />
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Возможность проведения конкурса для участников</td>
            <td className="package" />
            <td className="package" />
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
          <tr>
            <td>Возможность разработки индивидуального плана участия</td>
            <td className="package" />
            <td className="package" />
            <td className="package" />
            <td className="package"><span className="oi oi-check" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="container event-about">
      <div className="event-badge">
        <div className="badge-text">
          <span className="badge-title">{event.name}</span><br />
          <span className="badge-desc"><EventDate start={event.date} end={event.dateEnd} />, {event.address}</span>
        </div>
        <a href="mailto:piterunited@gmail.com" role="button" className="btn btn-dark reg-button-badge">стать партнером</a>
      </div>
      <div className="back">
        <Link to={`/event/${event.id}`} className="btn btn-light back-button" role="button">
          <span className="oi oi-arrow-left" />
          <span style={{ paddingLeft: '12px', fontWeight: '600' }}>Назад</span>
        </Link>
      </div>
    </div>

    <div className="footer">
      <span>&nbsp;</span>
    </div>
  </Layout>
))
