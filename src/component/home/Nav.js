import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
export default function Nav(props){
  const menuActive =  props.menu ? 'is-active' : '';
  let liVariant = {};
  let themeVariant={};
  let logoVariant = {};
  const location = useLocation()
  const urlPath= location.pathname
  let menuVariant = {};
  const themeControlleraAniDelay = props.width < 768 ? 5.35 : 6.10
  console.log(themeControlleraAniDelay);
  const isMobile = props.width < 768;
  if (urlPath === "/"){
     themeVariant = {
      hidden:{opacity:0, x:-1, y:-15},
      visible:{opacity:1, x:0, y:0},
    }
    logoVariant = {
      hidden:{scale:0, opacity:0},
      visible:{scale:1, opacity:1}
    }
    if(!isMobile){
      liVariant={
        hidden:{opacity:0, x:-1, y:-15},
        visible:{opacity:1, x:0, y:0},
      }
    }else{
      menuVariant ={
        hidden: {opacity:0},
        visible: {opacity:1}
      }
    }
  }

  return(
    <nav className="nav">
      <div className="nav-structure">
        <motion.div
         className="logo"
         variants= {logoVariant}
         initial="hidden"
         animate="visible"
         transition ={{
          type:"spring",
          stiffness: 50,
          duration: 0.25,
          delay:5
         }}
         ><h4>NE</h4></motion.div>
        <div className={`page-route ${menuActive}`}>
          <ul className={`page-route_lists ${menuActive}`}>
            <Link to='/'><motion.li 
                          className="list"
                          variants={liVariant}
                          animate="visible"
                          initial="hidden" 
                          transition={{
                            type:"tween",
                            stiffness: 100,
                            duration:0.25,
                            delay:5.35
                          }}
               onClick = {props.width <= 768 ? props.toggleMenu : '' } 
            ><span>01.</span>Home</motion.li></Link>
            <Link to='about'><motion.li 
                              className="list"
                              variants={liVariant}
                              animate="visible"
                              initial="hidden"
                              transition={{
                                type:"tween",
                                stiffness: 100,
                                duration: 0.25,
                                delay:5.5
                              }}
               onClick = {props.endAni }  
            ><span>02.</span>About</motion.li></Link>
            <Link to='projects'><motion.li 
                                className="list"
                                variants={liVariant}
                                animate="visible"
                                initial="hidden"
                                transition={{
                                  type:"tween",
                                  stiffness: 100,
                                  duration: 0.25,
                                  delay:5.7
                                }}
                onClick = {props.endAni }  
            ><span>03.</span>Projects</motion.li></Link>
            <Link to='contact'><motion.li 
                                className="list"
                                variants={liVariant}
                                animate="visible"
                                initial="hidden"
                                transition={{
                                  type:"tween",
                                  stiffness: 100,
                                  duration: 0.25,
                                  delay:5.9
                                }}
               onClick={ props.endAni }    
            ><span>04.</span>Contact</motion.li></Link>
          </ul>
        </div>
        <motion.div 
              className="theme-controller"
              variants= {themeVariant} 
              initial="hidden"
              animate="visible"
              transition={{
                type:"spring",
                stiffness: 100,
                duration:0.25,
                delay: themeControlleraAniDelay
              }}
              onClick={props.setTheme}>
          <FontAwesomeIcon icon={props.theme ? faSun: faMoon } /><h4>{
          props.theme ? 'too dark?' : 'too bright?'
          }</h4>
        </motion.div>
        <div>
        <motion.div 
              className={`navbar_toggle ${menuActive}`}
              variants={menuVariant}
              initial="hidden"
              animate="visible"
              transition={{
                type:"spring",
                stiffness: 70,
                duration: 0.25,
                delay: 5.75
              }} 
              onClick={props.toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </motion.div>
        </div>
      </div> 
    </nav>
  )
}