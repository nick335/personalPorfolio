import sunny from '../../assets/Sunny-Side-Agency.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
export default function Project(){
  return(
    <div className="project">
      <div className="project-imgDiv">
        <a href="#"><img alt="projectName" src={sunny}/></a>
        <div className='img-overlay'></div>
      </div>
      <div className="project-contentDiv">
        <div className='overflow-div'>
          <div className='project-contentDiv_overline'>
            <h3>Personal Projects</h3>
          </div>
          <div className='project-contentDiv_name'>
            <h4>Sunny Side</h4>
          </div>
          <div className='project-contentDiv_description'>
            <p>
            Vestibulum fringilla pede sit amet augue. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Phasellus tempus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Sed augue ipsum.
            </p>
          </div>
          <div className='project-contentDiv_technologies'>
            <ul>
              <li>React</li>
              <li>Sass</li>
              <li>Redux</li>
              <li>Framer Motion</li>
            </ul>
          </div>
          <div className='project-contentDiv_links'>
            <a href='#'><FontAwesomeIcon icon={faGithub} /></a>
            <a href='#'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}