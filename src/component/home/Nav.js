import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Nav(props){
  const menuActive =  props.menu ? 'is-active' : '';
  let liVariant = {};
  const themeVariant = {
    hidden:{opacity:0, x:-1, y:-15},
    visible:{opacity:1, x:0, y:0},
  }
  let menuVariant = {};
  const themeControlleraAniDelay = props.width < 768 ? 0.35 : 1.10
  console.log(themeControlleraAniDelay);
  const isMobile = props.width < 768;
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

  return(
    <nav className="nav">
      <div className="nav-structure">
        <motion.div
         className="logo"
         animate={{scale:1, opacity:1  }}
         transition ={{
          type:"spring",
          stiffness: 50,
          duration: 0.25,
         }}
         initial={{scale:0, opacity:0}}
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
                            delay:0.35
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
                                delay:0.5
                              }}
               onClick = {props.width <= 768 ? props.toggleMenu : '' }  
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
                                  delay:0.7
                                }}
                onClick = {props.width <= 768 ? props.toggleMenu : '' }  
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
                                  delay:0.9
                                }}
               onClick={props.width <= 768 ? props.toggleMenu:''}    
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
                delay: 0.75
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