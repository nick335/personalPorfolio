

export default function IntroPage(props){
  return(
    <div className={`container ${props.theme ? 'container-dark': 'container-light' } ${props.aniDone ? 'container-done': '' } `}>
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