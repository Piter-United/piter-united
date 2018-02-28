
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
const t_6 = universal(import('../src/containers/Speaker'), universalOptions)
const t_7 = universal(import('../src/containers/Speakers'), universalOptions)
const t_8 = universal(import('../src/containers/Company'), universalOptions)
const t_9 = universal(import('../src/containers/Companies'), universalOptions)
const t_10 = universal(import('../src/containers/Login'), universalOptions)
const t_11 = universal(import('../src/containers/404'), universalOptions)

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
t_8,
t_9,
t_10,
t_11
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_11"},"/":{t:"t_0"},"event":{c:{"cje306m4g69or0132wphzlzqm":{c:{"partner":{t:"t_1"},"talks":{t:"t_2"}},t:"t_3"},"cje04rb735oce0132m5qyv78a":{c:{"partner":{t:"t_1"},"talks":{t:"t_2"}},t:"t_3"}},t:"t_4"},"about":{t:"t_5"},"speaker":{c:{"cje04m50x5o9o0132hjqhpd97":{t:"t_6"},"cje05dbrz5omd01323j648wgm":{t:"t_6"},"cje05hjq25rny0197ec7a8i6v":{t:"t_6"},"cje05loja5osd0132vylf41sx":{t:"t_6"},"cje05qy695rt601971jyeqntj":{t:"t_6"},"cje05t9wb5owc013295jw73bu":{t:"t_6"},"cje05w1k85rw30197ff2c8s16":{t:"t_6"},"cje05zfki5rxn0197nw6qfkqr":{t:"t_6"},"cje0624t15p1l0132tk809a70":{t:"t_6"},"cje062jf35p2d0132zse16z98":{t:"t_6"},"cje062vwq5p2j0132r5ttcbfi":{t:"t_6"},"cje5qxscv7cxr0132ktx97w3n":{t:"t_6"},"cje5qy6j77cxw0132zt0280le":{t:"t_6"},"cje5qz0rt7kk50197uxudosop":{t:"t_6"},"cje5qzjnx7kke0197kze45rh3":{t:"t_6"},"cje5re9h67d6d0132p6og46n1":{t:"t_6"},"cje5rh6g67d8301323wfyfdof":{t:"t_6"},"cje5rmi8b7db60132uznffm3t":{t:"t_6"},"cje5roq637dco01324dc72uul":{t:"t_6"},"cje5ruitj7dfu01328nmxm2q3":{t:"t_6"},"cje5ruwdr7l3d0197z39413u9":{t:"t_6"},"cje5rxnia7dho0132x9uw66zv":{t:"t_6"},"cje5s16cy7l730197dld9jey9":{t:"t_6"},"cje5s3f807dkh0132qiqpakly":{t:"t_6"},"cje5s5a2m7l9a0197zss9yi7s":{t:"t_6"},"cje5s8nvc7dnb0132q32e17gk":{t:"t_6"}},t:"t_7"},"company":{c:{"cje0488zo5o7c0132oiefel9c":{t:"t_8"},"cje04towv5rah0197k9el9exj":{t:"t_8"},"cje04vz5m5odr0132aji8mn5o":{t:"t_8"},"cje04w8ce5odx0132d4stdewu":{t:"t_8"},"cje04xngl5oev0132q78mjs7x":{t:"t_8"},"cje04y9p95of901326ux43mtt":{t:"t_8"},"cje04ytu55rcn01975zpfa3se":{t:"t_8"},"cje04zoxj5ofq01321xqp2ssm":{t:"t_8"},"cje05chzo5om50132e3vce83t":{t:"t_8"},"cje05h9wm5opf0132nsjg62ew":{t:"t_8"},"cje05lcph5os50132ep6i5fet":{t:"t_8"},"cje05q5iy5rsg0197ivn5tu12":{t:"t_8"},"cje05sune5ovx0132qr3gh94j":{t:"t_8"},"cje05vlud5rvt0197woxui3ua":{t:"t_8"},"cje05zuaf5rxx01972wcisr6v":{t:"t_8"},"cje06197o5rza0197nay1gumb":{t:"t_8"},"cje061gvp5rze0197uw317gzx":{t:"t_8"},"cje061njw5p11013225kkgm6v":{t:"t_8"},"cje5r865s7kpa0197ulkdiqvw":{t:"t_8"},"cje5rb53x7d4e0132z486agbr":{t:"t_8"},"cje5reg8h7ktn0197sqo50x1k":{t:"t_8"},"cje5rifi37d8o0132bwtf6tf6":{t:"t_8"},"cje5rlkn27daf0132xi5vcu82":{t:"t_8"},"cje5rvide7l3l01972q050p37":{t:"t_8"},"cje5rw3wd7dgp0132uf1rg960":{t:"t_8"},"cje5s107j7l6y0197z044hj7g":{t:"t_8"},"cje5s37o77l7t01973lsyn4em":{t:"t_8"},"cje5s4yz87dla0132lze24c0r":{t:"t_8"},"cje5s7q017dmw0132nvuco6c8":{t:"t_8"},"cje5s96a27lbk0197yjfghg37":{t:"t_8"},"cje72fhvjz2z00118dy6xm2br":{t:"t_8"},"cje72gy9z0rhx0168b4xycj6l":{t:"t_8"},"cje72h2m3xooo01766om98cqx":{t:"t_8"},"cje72h2s8y4q70137jtsl1c4g":{t:"t_8"},"cje72h2y70rjk0168akohwv3c":{t:"t_8"},"cje72h344zj2m016704ykurf5":{t:"t_8"},"cje72h3cj99hq0112mp4efusj":{t:"t_8"},"cje72h3iaz3e30118g4r93bmx":{t:"t_8"},"cje72h3o699hu0112anschcn7":{t:"t_8"},"cje72h3u4x66q0177qqr0dvq5":{t:"t_8"},"cje72h4bd4byh0179i5t8bdwv":{t:"t_8"},"cje72h4gzzj2x0167o701fgll":{t:"t_8"},"cje72h4pix67201770pnkac57":{t:"t_8"}},t:"t_9"},"login":{t:"t_10"}}}

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
    