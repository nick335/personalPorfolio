import './sass/App.scss'
import PageTemplate from './component/PageTemplate';
import { Helmet, HelmetProvider } from "react-helmet-async";
import pagepic from './assets/Nicholas2.png'
import React from 'react';
function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Nicholas Erigo - Frontend Developer</title>
        <meta 
          name="description"
          content="I'm a Frontend Developer with  passion for creating dynamic, responsive, and user friendly web sites with modern technologies like React, Redux, Tailwind, Framer Motion, and SCSS. "
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ pagepic } />
        <meta
          name="twitter:title"
          content="Nicholas Erigo Porfolio site"
        />
        <meta name="twitter:creator" content="@ChigozieErigo" />
        <meta name="twitter:site" content="@ChigozieErigo" />
        <meta
          name="twitter:description"
          content="Hi I'm Nicholas Erigo, a Frontend Developer with a passion for creating dynamic, responsive and user friendly web sites with modern technologies like React, Redux, Tailwind, Framer Motion and SCSS."
        />
      </Helmet>
      <div className="">
        <PageTemplate />
      </div>
    </HelmetProvider>
  );
}

export default App;
