import { motion } from "framer-motion"
import nick from '../../assets/nicholas.jfif'

export default function About(props){
  return(
    <motion.div
        className={`about ${props.theme ? 'about-dark' : 'about-light'}`}
        initial={{ opacity:0 }}
        animate = {{ opacity:1,}}
        exit = {{ opacity:0 }}
    >
      <section className="about-container">
        <div className="about-container_contentDiv">
          <div className="about-container_contentDiv-header" >
             <h3><span>02.</span>About Me</h3>
             <div className="line"></div>
          </div>   
          <div className="about-container_contentDiv-body">
            <p>
              Hi, I'm Erigo Chigozie Nicholas and i enjoy making the web more beautiful, one line of code at a time. Currently studying Computer Engineering at the University of Lagos, Nigeria. 
            </p>
            <p>
              With the aid of numerous YouTube videos and other practice tasks on the front-end mentor website, I was able to start my front-end development adventure off on the right foot at the beginning of 2021.
              I'm passionate about crafting beautiful and intuitive web experiences. As I pursue my computer engineering degree at the University of Lagos, I'm continuously honing my coding skills and developing creative solutions that make the user experience more enjoyable.
            </p>
            <p>
              When i am not writing code, i enjoy playing FIFA, chess, watching anime and listening to Afrobeats.
            </p>
            <div className="list-para">
              Here are some of the technologies i have worked with
              <span>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript(ES6+)</li>
                  <li>SCSS</li>
                  <li>Framer motion</li>
                </ul>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Redux Toolkit</li>
                  <li>Tailwind</li>
                  <li>GitHub</li>
                </ul>
              </span>
              
            </div>
          </div>
        </div>
        <div className="about-container_imgDiv">
          <div className="img-container">
            <img alt="myImg" className="myimg" src={nick} />
          </div>
        </div>
      </section>
    </motion.div>
  )
}