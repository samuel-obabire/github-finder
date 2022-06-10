import { createContext, useContext, useReducer } from "react"
import alertReducer from "./alertReducer"

const alertContext = createContext()

const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, {
    alert: null,
  })

  const setAlert = (payload) => {
    dispatch({ type: "SET_ALERT", payload })

    setTimeout(() => {
      dispatch({ type: "CLEAR_ALERT" })
    }, 2000)
  }

  const value = { ...state, setAlert }

  return <alertContext.Provider value={value}>{children}</alertContext.Provider>
}

export const useAlert = () => {
  const context = useContext(alertContext)

  if (context === undefined)
    throw new Error("useAlert must be used within its Provider")

  return context
}

export default AlertProvider
