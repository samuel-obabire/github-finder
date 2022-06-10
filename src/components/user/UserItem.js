import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const UserItem = ({ user }) => {
  return (
    <div className="mb-8 shadow-md p-3">
      <div className="flex">
        <div className="avatar mr-6">
          <div className="w-16 rounded-full">
            <img src={user.avatar_url} alt="" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mb-auto">
            <div className="text-xl ">{user.login}</div>
          </div>
          <Link
            className="text-sm text-base-content text-opacity-40"
            to={`/user/${user.login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
