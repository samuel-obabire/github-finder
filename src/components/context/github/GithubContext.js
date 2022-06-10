import { createContext, useContext, useReducer } from "react"
import githubReducer from "./githubReducer"

const githubContext = createContext()

const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, {
    users: [],
    loading: false,
  })

  const value = { ...state, dispatch }

  return (
    <githubContext.Provider value={value}>{children}</githubContext.Provider>
  )
}

export const useGithub = () => {
  const context = useContext(githubContext)

  if (context === undefined)
    throw new Error("useGithub must be use within its provider")
  return context
}

export default GithubProvider
