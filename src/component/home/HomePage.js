import Nav from "./Nav"
import HomeContent from "./HomeContent"
import Contact from "../contact/contact"
import Projects from "../projects/projects"
import About from "../about/about"
import SideBar from "./sideBar"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function HomePage(props){
  const location = useLocation()

  function successNotification(){
    toast.success('Email sent successfully', {
      position: toast.POSITION.TOP_RIGHT
    })
  }
  function errorNotification(message){
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT
    })
  }
  return(
    <div className={`home-page ${ props.theme ?'home-page-dark' : 'home-page-light'} ${props.aniDone ? 'home-page-start' :''}`}>
      <Nav 
      setTheme = {props.setTheme}
      theme = {props.theme}
      menu = {props.menu}
      toggleMenu = {props.toggleMenu}
      width = {props.viewportWidth}
      endAni = {props.endAni}
      />
      <AnimatePresence >
        <Routes location={ location } key={ location.pathname } >
          <Route path="/" element={<HomeContent 
            width = {props.viewportWidth}
            aniexpire = {props.aniexpire}
          />} />
          <Route path="about" element={<About theme = { props.theme } />} />
          <Route path="projects" element={<Projects 
            theme = {props.theme}
            width = {props.viewportWidth}
          />} />
          <Route path="contact" element={<Contact 
            theme = {props.theme}
            success = {successNotification}
            error = {errorNotification}
          />} />
        </Routes>
      </ AnimatePresence>
      <SideBar 
          theme = {props.theme}
      />
      <ToastContainer />
    </div>
  )
}