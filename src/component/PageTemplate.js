// import IntroPage from "./Intro/IntroPage"
import HomePage from "./home/HomePage";
import React from "react";

export default function PageTemplate(){
  const [darktheme, setDarktheme] = React.useState( JSON.parse(localStorage.getItem('theme') === 'true'))
  const [menu, setMenu] = React.useState(false)
  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
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


  return(
    <div className={`page-template ${ darktheme ?'page-template-dark' : 'page-template-light' } ${ menu ? 'page-template_menuopen' : '' }`}>
      {/* <IntroPage 
        theme = {darktheme}
      /> */}
      <HomePage 
        theme = {darktheme}
        setTheme = {setTheme}
        menu = {menu}
        toggleMenu = {toggleMenu}
        viewportWidth = {windowSize.innerWidth}
      />
    </div>
  )
}