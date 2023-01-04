import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Nav(props){
  const menuActive =  props.menu ? 'is-active' : '';

  return(
    <nav className="nav">
      <div className="nav-structure">
        <div className="logo"><h4>NE</h4></div>
        <div className={`page-route ${menuActive}`}>
          <ul className={`page-route_lists ${menuActive}`}>
            <Link to='/'><li className="list"  
               onClick = {props.width <= 768 ? props.toggleMenu : '' } 
            ><span>01.</span>Home</li></Link>
            <Link to='about'><li className="list"><span>02.</span>About</li></Link>
            <Link to='projects'
              onClick = {props.width <= 768 ? props.toggleMenu : '' }
            ><li className="list"><span>03.</span>Projects</li></Link>
            <Link to='contact'
              onClick = {props.width <= 768 ? props.toggleMenu : '' }
            ><li className="list"><span>04.</span>Contact</li></Link>
          </ul>
        </div>
        <div className="theme-controller" onClick={props.setTheme}>
          <FontAwesomeIcon icon={props.theme ? faSun: faMoon } /><h4>{
          props.theme ? 'too dark?' : 'too bright?'
          }</h4>
        </div>
        <div>
        <div className={`navbar_toggle ${menuActive}`} onClick={props.toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        </div>
      </div> 
    </nav>
  )
}