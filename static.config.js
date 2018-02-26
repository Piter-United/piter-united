import axios from 'axios'
import React from 'react'

import query from './query'

export default {
  siteRoot: 'http://piter-united.ru',
  getSiteData: () => ({
    title: 'Piter United',
    lastBuilt: Date.now(),
  }),
  Document: ({ Html, Head, Body, children, siteData }) => (
    <Html lang="ru-RU">
      <Head>
        <title>{siteData.title}</title>
        <meta charSet="UTF-8" />
        <link href="/font/css/open-iconic-bootstrap.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>{children}</Body>
      <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js" />
      <script src="//yastatic.net/share2/share.js" />
    </Html>
  ),
  getRoutes: async () => {
    const body = {
      operationName: '',
      variables: {},
      query,
    }
    const {
      data: {
        data: {
          allCompanies: companies,
          allEvents: events,
          allCommunities: communities,
          allSpeakers: speakers,
        },
        errors,
      },
    } = await axios.post('https://api.graph.cool/simple/v1/cjdznwgo403gi0148c8fzyagx', body)
    if (errors) {
      console.log(errors)
    }
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({ communities }),
      },
      {
        path: '/event',
        component: 'src/containers/Events',
        getData: () => ({ events }),
        children: events.map(event => ({
          path: event.id,
          component: 'src/containers/Event',
          getData: () => ({ event }),
          children: [
            {
              path: 'partner',
              component: 'src/containers/Partner',
              getData: () => ({
                event: {
                  id: event.id,
                  name: event.name,
                  date: event.date,
                  dateEnd: event.dateEnd,
                  address: event.address,
                },
              }),
            },
            {
              path: 'talks',
              component: 'src/containers/Talks',
              getData: () => ({
                event: {
                  id: event.id,
                  name: event.name,
                  registration: event.registration,
                  timepadId: event.timepadId,
                  date: event.date,
                  dateEnd: event.dateEnd,
                  address: event.address,
                },
              }),
            }],
        })),
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: 'speaker',
        component: 'src/containers/Speakers',
        getData: () => ({ speakers }),
        children: speakers.map(speaker => ({
          path: speaker.id,
          component: 'src/containers/Speaker',
          getData: () => ({ speaker }),
        })),
      },
      {
        path: '/company',
        component: 'src/containers/Companies',
        getData: () => ({ companies }),
        children: companies.map(company => ({
          path: company.id,
          component: 'src/containers/Company',
          getData: () => ({ company }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
