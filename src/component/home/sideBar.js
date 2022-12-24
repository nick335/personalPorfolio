import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';


export default function SideBar(){
  return(
    <section className="sidebar">
      <div className="sidebar_social-icons">
        <div className="icon"><a href="https://github.com/nick335"><FontAwesomeIcon icon={faGithub} /></a></div>
        <div className="icon"><a href="https://www.linkedin.com/in/chigozie-erigo-435a4a248/"><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
        <div className="icon"><a href="https://twitter.com/ChigozieErigo"><FontAwesomeIcon icon={faTwitter} /></a></div>
        <div className="icon"><a href="#"><FontAwesomeIcon icon={ faMessage} /></a></div>
        <div className="line"></div>
      </div>
      <div className="sidebar_email">
        <div className="email"><p>chigozieerigo05@gmail.com</p></div>
        <div className="line"></div>
      </div>
    </section>
  )
}