import Project from "./project"
import { motion } from "framer-motion"
export default function Projects(props){
  return(
    <motion.div
        initial={{ opacity:0 }}
        animate = {{ opacity:1 }}
        exit = {{ opacity:0 }}
    >
      <section className={`projects ${props.theme ? 'projects-dark' : 'projects-light'}`}>
        <div className="projects-header">
          <h3><span>03.</span>Some of my projects</h3>
          <div></div>
        </div>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </section>  
    </motion.div>
  )
}