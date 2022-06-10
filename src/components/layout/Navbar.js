import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex w-full justify-between">
          <div className="flex-none">
            <FaGithub className="inline text-3xl mr-2" />
            <Link to="/" className="font-bold align-middle text-lg md:text-2xl">
              Github Finder
            </Link>
          </div>
        </div>
        <div className="flex flex-grow items-end">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
