const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return { ...state, alert: action.payload }
    case "CLEAR_ALERT":
      return { ...state, alert: null }
    default:
      throw new Error("unhandled action type")
  }
}

export default alertReducer
