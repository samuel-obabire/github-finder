import { Routes, Route } from "react-router-dom"
import GithubProvider from "./components/context/github/GithubContext"

import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import NotFound from "./components/pages/NotFound"
import Footer from "./components/layout/Footer"
import User from "./components/pages/User"
import AlertProvider from "./components/context/alert/AlertContext"
import Alert from "./components/layout/Alert"

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <div className="bg-base h-screen w-full flex flex-col justify-between">
          <Navbar />
          <main className="container mx-auto px-3">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
