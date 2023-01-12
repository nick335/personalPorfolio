import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


export default function HomeContent(props){
  let contentVariant={}
  if(!props.aniexpire){
    contentVariant = {
      hidden:{opacity:0, y:20},
      visible:{opacity:1, y:0}
    }
  }
  return(
    <motion.div
        initial={{ opacity:0 }}
        animate = {{ opacity:1 }}
        exit = {{ opacity:0 }}
        className = 'home-motion'
    >
     <section className="home-content">
        <div className="home-content_content">
            <motion.h3
              variants={contentVariant}
              initial="hidden"
              animate="visible"
              transition={{
                type:"keyframes",
                stiffness: 100,
                duration:0.25,
                delay: props.width < 768 ? 5.9 : 6.3
              }}
              className="home-content_content-greeting"
            >Hello, my name is</motion.h3>
            <motion.h2 
              variants={contentVariant}
              initial="hidden"
              animate="visible"
              transition={{
                type:"keyframes",
                stiffness: 100,
                duration: 0.25,
                delay: props.width < 768 ? 6 : 6.4
              }}
              className="home-content_content-name">Nicholas Erigo.</motion.h2>
            <motion.h2 
              variants={contentVariant}
              initial="hidden"
              animate="visible"
              transition={{
                type:"keyframes",
                stiffness: 100,
                duration: 0.25,
                delay: props.width < 768 ? 6.3 : 6.6
              }}
              className="home-content_content-caption"
            >Crafting Creative Web Experience.</motion.h2>
            <motion.p
              variants= {contentVariant}
              initial="hidden"
              animate="visible"
              transition={{
                type:"keyframes",
                stiffness: 100,
                duration:0.25,
                delay: props.width < 768 ? 6.5 : 6.8
              }} 
              className="home-content_content-para "
            >I'm a Frontend Developer with a passion for creating dynamic, responsive and user friendly web sites with modern technologies like React, Redux, Tailwind, Framer Motion and SCSS. I'm now concentrating on learning Next.js, and improving my animation skills with the use GSAP.</motion.p>
        </div>
        <div className="home-content_btn">
          <Link to='contact'>
            <motion.button 
              variants= {contentVariant}
              initial="hidden"
              animate="visible"
              transition={{
                type:"keyframes",
                stiffness: 100,
                duration:0.25,
                delay: props.width < 768 ? 6.7 : 7
              }} 
              className="btn_connect"
            >Let's Connect<span><FontAwesomeIcon icon={faArrowRight} /></span></motion.button>
          </Link>
          
        </div>
      </section> 
    </motion.div> 
   )
}