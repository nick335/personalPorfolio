import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  faGithub,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';


export default function SideBar(props){
  return(
    <section className="sidebar">
      <div className="sidebar_social-icons">
        <motion.div whileHover={{y:-3.5, transition: { duration: 0.2 } }} className="icon"><a href="https://github.com/nick335"><FontAwesomeIcon icon={faGithub} /></a></motion.div>
        <motion.div whileHover={{y:-3.5, transition: { duration: 0.2 } }}  className="icon"><a href="https://www.linkedin.com/in/chigozie-erigo-435a4a248/"><FontAwesomeIcon icon={faLinkedinIn} /></a></motion.div>
        <motion.div whileHover={{y:-3.5, transition: { duration: 0.2 } }}  className="icon"><a href="https://twitter.com/ChigozieErigo"><FontAwesomeIcon icon={faTwitter} /></a></motion.div>
        <motion.div whileHover={{y:-3.5, transition: { duration: 0.2 } }}  className="icon"><a href="#"><FontAwesomeIcon icon={ faMessage} /></a></motion.div>
        <div className="line"></div>
      </div>
      <div className="sidebar_email">
        <div className="email"><motion.p whileHover={{x:-3.5,  transition: { duration: 0.2 } }}  >chigozieerigo05@gmail.com</motion.p></div>
        <div className="line"></div>
      </div>
    </section>
  )
}