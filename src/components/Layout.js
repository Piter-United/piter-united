import React from 'react'
import { Link } from 'react-static'

import img from '../../public/img.png'

const Btn = ({ to, text }) =>
  (<Link to={to} className="btn btn-light" style={{ marginRight: '10px' }} role="button">{text}</Link>)

const Layout = ({ buttons, children }) => (
  <div className="background">
    <div className="malina-left">
      <img alt="" src={img} style={{ width: '400px' }} />
    </div>
    <div className="container">
      {buttons && buttons}
      {!buttons &&
      <div className="back">
        <Btn to="/" text="Home" />
        <Btn to="/event" text="Events" />
        {/* <Btn to="/speaker" text="Speakers" /> */}
        <Btn to="/company" text="Companies" />
        <Btn to="/about" text="About" />
      </div>}
    </div>
    <div className="container">
      {children}
    </div>
  </div>)

export default Layout
