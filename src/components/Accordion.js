import React from 'react'

export default class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = { opened: [] }
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

  hasOpened(index) {
    const { opened } = this.state
    return opened.includes(index)
  }

  item(index, item) {
    const cls = ['collapse']
    if (this.hasOpened(index)) {
      cls.push('show')
    }
    return (
      <div className="card" key={index}>
        <div className="card-header">
          <h5 className="mb-0">
            <button
              onClick={() => this.toggle(index)}
              className="btn programm-item"
              data-toggle="collapse"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {this.hasOpened(index) ? <span className="oi oi-chevron-bottom" /> : <span className="oi oi-chevron-right" />}
              <span className="programm-item-title">{item.title}</span>
            </button>
          </h5>
        </div>
        <div className={cls.join(' ')} aria-labelledby="headingOne">
          {item.data}
        </div>
      </div>
    )
  }
  render() {
    return this.props.items.map((item, index) => this.item(index, item))
  }
}
