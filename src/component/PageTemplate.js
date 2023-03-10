import IntroPage from "./Intro/IntroPage"
import HomePage from "./home/HomePage";
import React from "react";
import { useLocation } from "react-router-dom";

export default function PageTemplate(){
  const location = useLocation()
  const urlPath = location.pathname
  const [darktheme, setDarktheme] = React.useState( JSON.parse(localStorage.getItem('theme') === 'true'))
  const [menu, setMenu] = React.useState(false)
  const [introDone, setIntroDone] = React.useState(false)
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  const [aniexpire, setaniexpire] = React.useState(false)
  let vh = window.innerHeight * 0.01
  React.useEffect(()=> {
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [vh])

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDone(true)
    }, 5000);
    return () => clearTimeout(timer);
  }, [])
  React.useEffect(()=>{
    if(urlPath !== "/"){
      setaniexpire(true)
    }
  }, [urlPath])
  React.useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(darktheme));
  }, [darktheme])

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  function setTheme(){
    setDarktheme(
      prevstate => !prevstate
    )
  }
  function toggleMenu(){
    setMenu(prevstate => !prevstate)
  }
  function endAni(){
    // setaniexpire(true)
    if(windowSize.innerWidth <= 768){
      toggleMenu()
    }

  }


  return(
    <div className={`page-template ${ darktheme ?'page-template-dark' : 'page-template-light' } ${ menu ? 'page-template_menuopen' : '' }`}>
      <IntroPage 
        theme = {darktheme}
        aniDone = {introDone}
      />
      <HomePage 
        theme = {darktheme}
        setTheme = {setTheme}
        menu = {menu}
        toggleMenu = {toggleMenu}
        viewportWidth = {windowSize.innerWidth}
        aniDone = {introDone}
        aniexpire = {aniexpire}
        endAni = {endAni}
      />
    </div>
  )
}