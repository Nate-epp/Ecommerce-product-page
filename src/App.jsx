import NavBar from "./components/NavBar"
import Profile from "./components/Profile"
import About from "./components/About"
import Education from "./components/Education"
import Skill from "./components/Skill"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import { useState } from "react"


function App() {
  const [showMenu, setShowMenu] = useState(false)
  function menuHandler(){
    setShowMenu(!showMenu)
  }

  return (
    <div className="h-full bg-gray-900 text-slate-50 grid gap-4  min-w-fit overflow-x-hidden">
        <NavBar menuHandler={menuHandler} showMenu={showMenu} />
        {/* <Profile /> */}
        <About showMenu={showMenu}/>
        <Education />
        <Experience />
        <Skill />
        <Portfolio/>
        <Contact />
        <footer className="text-center text-slate-400 my-4">
            Create by <span className="font-bold text-blue-400">Nate_Epp </span>using React and Tailwind Css
        </footer>
    </div>
  )
}

export default App
