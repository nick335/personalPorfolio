import { motion } from "framer-motion"
import sunny from '../../assets/Sunny-Side-Agency.png'

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
              Aliquam lobortis. Ut a nisl id ante tempus hendrerit. Fusce a quam. Fusce fermentum odio nec arcu. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor.
              Aliquam lobortis. Ut a nisl id ante tempus hendrerit. Fusce a quam. 
            </p>
            <p>
              Aliquam lobortis. Ut a nisl id ante tempus hendrerit. Fusce a quam. Fusce fermentum odio nec arcu. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor.
              Aliquam lobortis. Ut a nisl id ante tempus hendrerit. Fusce a quam. Fusce fermentum odio nec arcu. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor.
            </p>
            <p>
              Fusce commodo aliquam arcu. Sed in libero ut nibh placerat accumsan. Etiam ultricies nisi vel augue. Aenean tellus metus, 
            </p>
            <p className="list-para">
              Here are some of the technologies i have worked with
              <div>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
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
              </div>
              
            </p>
          </div>
        </div>
        <div className="about-container_imgDiv">
          <div className="img-container">
            <img alt="myImg" className="myimg" src={sunny} />
          </div>
        </div>
      </section>
    </motion.div>
  )
}