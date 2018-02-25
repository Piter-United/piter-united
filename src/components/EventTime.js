import React from 'react'
import { isEqual, format } from 'date-fns'
import langRu from 'date-fns/locale/ru'

const EventTime = ({ start, end }) => {
  if (isEqual(format(start, 'YYYY-MM-DD'), format(end, 'YYYY-MM-DD'))) {
    return (<span> {format(start, 'dddd', { locale: langRu })}
            &nbsp;c {format(start, 'HH:mm')} до {format(end, 'HH:mm')}</span>)
  }
  return (<span>c {format(start, 'HH:mm DD MMMM')} до {format(end, 'HH:mm DD MMMM YYYY')}</span>)
}

export default EventTime
