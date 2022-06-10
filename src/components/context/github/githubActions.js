import axios from "axios"

const github = axios.create({
  baseURL: "https://api.github.com",
})

const searchUsers = async (text) => {
  const res = await github.get(`/search/users`, {
    params: {
      q: text,
    },
  })

  return res.data.items
}

const getUserAndRepos = async (login) => {
  const [{ data: user }, { data: repos }] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`, {
      params: {
        sort: "created",
        per_page: 10,
      },
    }),
  ])

  return { user, repos }
}

export { searchUsers, getUserAndRepos }
