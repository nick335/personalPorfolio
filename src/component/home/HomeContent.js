import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


export default function HomeContent(){
  return(
    <motion.div
        initial={{ opacity:0 }}
        animate = {{ opacity:1 }}
        exit = {{ opacity:0 }}
        className = 'home-motion'
    >
     <section className="home-content">
        <div className="home-content_content">
            <h3 className="home-content_content-greeting">Hello, my name is</h3>
            <h2 className="home-content_content-name">Nicholas Erigo.</h2>
            <h2 className="home-content_content-caption">I love building web products</h2>
            <p className="home-content_content-para ">I’m a frontend devloper specializing in building dynamic, responsive and user friendly web sites with modern technologies like React, Vue, Redux, Tailwind, Sass, Framer Motion and Gsap. Currently, I’m focused on learning Next.js, Typescript and taking my animation skill to the next level.</p>
        </div>
        <div className="home-content_btn">
          <Link to='contact'>
            <button className="btn_connect">Let's Connect<span><FontAwesomeIcon icon={faArrowRight} /></span></button>
          </Link>
          
        </div>
      </section> 
    </motion.div> 
   )
}