import React from 'react'
import { isEqual, format } from 'date-fns'
import langRu from 'date-fns/locale/ru'

const EventDate = ({ start, end }) => {
  if (isEqual(format(start, 'YYYY-MM-DD'), format(end, 'YYYY-MM-DD'))) {
    return format(start, 'DD MMMM YYYY', { locale: langRu })
  }
  return (<span>{format(start, 'DD', { locale: langRu })} - {format(end, 'DD MMMM YYYY', { locale: langRu })}</span>)
}

export default EventDate
