const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload
    case 'WITHDRAW':
      return state - action.payload
      // if dispatch action does not match any
    default:
      return state
  }
}

export default reducer