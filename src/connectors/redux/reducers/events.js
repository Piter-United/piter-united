const initialState = {
  events: {},
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'EVENT_ADD':
      return {
        ...state,
        events: { ...state.events, [action.event.id]: action.event },
      }
    case 'EVENT_UPDATE':
      state.events[action.event.id] = action.event
      return {
        ...state,
        events: state.events,
      }
    case 'EVENT_DELETE':
      delete state.events[action.id]
      return {
        ...state,
        events: state.events,
      }
    default:
      return state
  }
}
