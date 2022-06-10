import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"

const NotFound = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold">Oops!</h1>
          <p className="py-6 text-3xl">404 - Page not found</p>
          <Link to="/" class="btn btn-primary btn-lg">
            <FaHome className="text-2xl mr-1" /> Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
