import { useGithub } from "../context/github/GithubContext"
import UserItem from "./UserItem"

const UserResult = () => {
  const { users, loading } = useGithub()

  if (loading) return <div className="text-2xl font-bold">Loading</div>

  if (!users.length) return null

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserResult
