import Project from "./project"
import { motion } from "framer-motion"
import data from "./projectdata/data/data"
import { nanoid } from "nanoid"
export default function Projects(props){
  const Data = data
  const project = Data.map(each =>{
    return <Project 
                key={nanoid()}
                type= {each.projectType}
                name= {each.projectName}
                img = {each.projetcImage}
                descr= {each.projectDescription}
                techs = {each.projectTech}
                livesite = {each.projectLivesite}
                codelink = {each.projectCodelink}
                width = {props.width}
            />
  })
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
          {project}
      </section>  
    </motion.div>
  )
}