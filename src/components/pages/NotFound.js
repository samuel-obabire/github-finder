import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"

const NotFound = () => {
  return (
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-6xl font-bold">Oops!</h1>
          <p class="py-6 text-3xl">404 - Page not found</p>
          <Link to="/" class="btn btn-primary btn-lg">
            <FaHome className="text-2xl mr-1" /> Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
