import Nav from "./Nav"
import HomeContent from "./HomeContent"
import Contact from "../contact/contact"
import Projects from "../projects/projects"
import About from "../about/about"
import SideBar from "./sideBar"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

export default function HomePage(props){
  const location = useLocation()
  return(
    <div className={`home-page ${ props.theme ?'home-page-dark' : 'home-page-light'}`}>
      <Nav 
      setTheme = {props.setTheme}
      theme = {props.theme}
      menu = {props.menu}
      toggleMenu = {props.toggleMenu}
      width = {props.viewportWidth}
      />
      <AnimatePresence >
        <Routes location={ location } key={ location.pathname } >
          <Route path="/" element={<HomeContent 
            width = {props.viewportWidth}
          />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects 
            theme = {props.theme}
          />} />
          <Route path="contact" element={<Contact 
            theme = {props.theme}
          />} />
        </Routes>
      </ AnimatePresence>
      <SideBar 
          theme = {props.theme}
      />
    </div>
  )
}