import './sass/App.scss'
import PageTemplate from './component/PageTemplate';
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nicholas Erigo - Frontend Developer</title>
        <meta 
          name="description"
          content="I'm a Frontend Developer with a passion for creating dynamic, responsive and user friendly web sites with modern technologies like React, Redux, Tailwind, Framer Motion and SCSS. I'm now concentrating on learning Next.js, and improving my animation skills with the use GSAP."
        />
      </Helmet>
      <div className="">
        <PageTemplate />
      </div>
    </HelmetProvider>
  );
}

export default App;
