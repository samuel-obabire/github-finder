import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getUserAndRepos } from "../context/github/githubActions"
import { useGithub } from "../context/github/GithubContext"

const User = () => {
  const { login } = useParams()
  const { dispatch, loading } = useGithub()

  useEffect(() => {
    dispatch({ type: "SET_LOADING" })
    ;(async function () {
      const { user, repos } = await getUserAndRepos(login)

      dispatch({ type: "SET_USER_REPO", payload: { user, repos } })
    })()
  }, [login, dispatch])

  if (loading) return <h3 className="font-bold text-2xl">Loading...</h3>

  return <div>{login}</div>
}

export default User
