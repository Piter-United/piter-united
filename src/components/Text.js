import React from 'react'

const Text = ({ text }) => text.split('\n').map((item, key) => <span key={key}>{item}<br /></span>)

export default Text
