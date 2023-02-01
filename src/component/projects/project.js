// import sunny from '../../assets/Sunny-Side-Agency.png'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import parse from 'html-react-parser'
import { nanoid } from 'nanoid';



export default function Project(props){
  const techs= props.techs
  const techsli=techs.map(each=>{
    return <li key={nanoid()} >{each}</li>
  })
  const projectVariants = {
    visible:{ opacity:1,  y:0},
    hidden: {opacity: props.width <= 768 ? 1 : 0,  y: props.width <= 768 ? 0 : 30},
  }
  const [ref, inView] = useInView({
    threshold:0.7,
  });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return(
    <motion.div className="project"
                style={ props.width > 768 ? '': { background:`url(${props.img})
                `,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
              }}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={projectVariants}
                viewport={{once: true}}
                transition={{
                  type:"keyframes",
                  stiffness: 100,
                  duration:0.6
                }}

    >
      <div className="project-imgDiv">
        <a href={props.livesite}><img alt={props.name} src={props.img}/></a>
        <div className='img-overlay'></div>
      </div>
      <div className="project-contentDiv">
        <div className='overflow-div'>
          <div className='project-contentDiv_overline'>
            <h3>{props.type}</h3>
          </div>
          <div className='project-contentDiv_name'>
            <h4>{props.name}</h4>
          </div>
          <div className='project-contentDiv_description'>
            <p>
                {parse(props.descr)}
            </p>
          </div>
          <div className='project-contentDiv_technologies'>
            <ul>
              {techsli}
            </ul>
          </div>
          <div className='project-contentDiv_links'>
            <a target='_blank'rel="noopener noreferrer" href={props.codelink}><FontAwesomeIcon icon={faGithub} /></a>
            <a target="_blank" rel="noopener noreferrer" href={props.livesite}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}