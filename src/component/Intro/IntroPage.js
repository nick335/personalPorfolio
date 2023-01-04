

export default function IntroPage(props){
  return(
    // <div className="intro-structure">
    //   <div className="scaling">
    //     <div className="draw"><p>NE</p></div>
    //   </div>
    // </div>
    <div className={`container ${props.theme ? 'container-dark': 'container-light' }`}>
      <div className="box">
          <div className="title">
              <span className="block"></span>
              <h1>Nicholas Erigo<span></span></h1>
          </div>
          <div className="role">
              <div className="block"></div>
              <p>Frontend Developer</p>
          </div>
      </div>
    </div>
  )
}