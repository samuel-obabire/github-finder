import { useState } from "react"
import { searchUsers } from "../context/github/githubActions"
import { useGithub } from "../context/github/GithubContext"

const UserSearch = () => {
  const [text, setText] = useState("")
  const { dispatch, users } = useGithub()

  const onSubmit = async (e) => {
    e.preventDefault()

    if (text.trim() === "") {
      return alert("Please Enter A Search Value")
    }

    dispatch({ type: "SET_LOADING" })
    const users = await searchUsers(text)
    dispatch({ type: "SEARCH_USERS", payload: users })

    setText("")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
      <form onSubmit={(e) => onSubmit(e)} className="">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={text}
            onChange={(e) => setText(e.currentTarget.value.trim())}
            className="input input-bordered w-full pr-40 p-8 text-lg bg-white text-black"
          />
          <button
            type="submit"
            className="btn absolute px-10 font-bold text-lg top-0 right-0 h-full rounded-none rounded-r-lg"
          >
            Search
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <button
          onClick={() => dispatch({ type: "CLEAR_USERS" })}
          className="font-bold h-full btn w-36 btn-ghost text-lg"
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default UserSearch
