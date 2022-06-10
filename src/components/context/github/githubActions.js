import axios from "axios"

const github = axios.create({
  baseURL: "https://api.github.com",
})

const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const res = await github.get(`/search/users?${params}`)

  return res.data.items
}

export { searchUsers }
