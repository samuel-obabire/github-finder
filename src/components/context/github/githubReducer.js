const githubReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_USERS":
      return { ...state, users: action.payload, loading: false }
    case "SET_LOADING":
      return { ...state, loading: true }
    case "CLEAR_USERS":
      return { ...state, users: [] }
    default:
      throw new Error(`unhandled action type - ${action.type}`)
  }
}

export default githubReducer
