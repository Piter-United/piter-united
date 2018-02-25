
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'
    import universal, { setHasBabelPlugin } from 'react-universal-component'

    setHasBabelPlugin()

    const universalOptions = {
      loading: () => null,
      error: () => null,
    }

    const t_0 = universal(import('../src/containers/Home'), universalOptions)
const t_1 = universal(import('../src/containers/Partner'), universalOptions)
const t_2 = universal(import('../src/containers/Talks'), universalOptions)
const t_3 = universal(import('../src/containers/Event'), universalOptions)
const t_4 = universal(import('../src/containers/Events'), universalOptions)
const t_5 = universal(import('../src/containers/About'), universalOptions)
const t_6 = universal(import('../src/containers/Company'), universalOptions)
const t_7 = universal(import('../src/containers/Companies'), universalOptions)
const t_8 = universal(import('../src/containers/404'), universalOptions)

    // Template Map
    const templateMap = {
      t_0,
t_1,
t_2,
t_3,
t_4,
t_5,
t_6,
t_7,
t_8
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_8"},"/":{t:"t_0"},"event":{c:{"cje04rb735oce0132m5qyv78a":{c:{"partner":{t:"t_1"},"talks":{t:"t_2"}},t:"t_3"},"cje306m4g69or0132wphzlzqm":{c:{"partner":{t:"t_1"},"talks":{t:"t_2"}},t:"t_3"}},t:"t_4"},"about":{t:"t_5"},"company":{c:{"cje0488zo5o7c0132oiefel9c":{t:"t_6"},"cje04towv5rah0197k9el9exj":{t:"t_6"},"cje04vz5m5odr0132aji8mn5o":{t:"t_6"},"cje04w8ce5odx0132d4stdewu":{t:"t_6"},"cje04xngl5oev0132q78mjs7x":{t:"t_6"},"cje04y9p95of901326ux43mtt":{t:"t_6"},"cje04ytu55rcn01975zpfa3se":{t:"t_6"},"cje04zoxj5ofq01321xqp2ssm":{t:"t_6"},"cje05chzo5om50132e3vce83t":{t:"t_6"},"cje05h9wm5opf0132nsjg62ew":{t:"t_6"},"cje05lcph5os50132ep6i5fet":{t:"t_6"},"cje05q5iy5rsg0197ivn5tu12":{t:"t_6"},"cje05sune5ovx0132qr3gh94j":{t:"t_6"},"cje05vlud5rvt0197woxui3ua":{t:"t_6"},"cje05zuaf5rxx01972wcisr6v":{t:"t_6"},"cje06197o5rza0197nay1gumb":{t:"t_6"},"cje061gvp5rze0197uw317gzx":{t:"t_6"},"cje061njw5p11013225kkgm6v":{t:"t_6"}},t:"t_7"}}}

    // Get template for given path
    const getComponentForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }

    if (typeof document !== 'undefined') {
      window.reactStaticGetComponentForPath = getComponentForPath
    }

    export default class Routes extends Component {
      render () {
        const { component: Comp, render, children } = this.props
        const renderProps = {
          templateMap,
          templateTree,
          getComponentForPath
        }
        if (Comp) {
          return (
            <Comp
              {...renderProps}
            />
          )
        }
        if (render || children) {
          return (render || children)(renderProps)
        }

        // This is the default auto-routing renderer
        return (
          <Route path='*' render={props => {
            let Comp = getComponentForPath(props.location.pathname)
            if (!Comp) {
              Comp = getComponentForPath('404')
            }
            return Comp && <Comp {...props} />
          }} />
        )
      }
    }
    