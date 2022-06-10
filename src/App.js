import { Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import NotFound from "./components/pages/NotFound"
import Footer from "./components/layout/Footer"
import GithubProvider from "./components/context/github/GithubContext"

function App() {
  return (
    <GithubProvider>
      <div className="bg-base h-screen w-full flex flex-col justify-between">
        <Navbar />
        <main className="container mx-auto px-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </GithubProvider>
  )
}

export default App
