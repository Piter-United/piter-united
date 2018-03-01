const initialState = {
  user: null,
  error: null,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN/IN':
      return {
        ...state,
        error: null,
        user: action.user,
      }
    case 'LOGIN/ERROR':
      return {
        ...state,
        user: null,
        error: action.error,
      }
    case 'LOGIN/OUT':
      return {
        ...state,
        user: null,
        error: null,
      }
    default:
      return state
  }
}
