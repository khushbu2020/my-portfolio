import React from 'react';
import { Link, Element } from 'react-scroll';
import Header from './component/Header';
import Hero from './component/Hero';
import Step from './component/Step';
import Portfolio from './component/Portfolio';
import ContactMe from './component/ContactMe';
import MyClients from './component/MyClients';
import About from './component/About';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <Element name="header">
    <Header />
      </Element>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skill">
        <Step />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      {/* <Element name="my-clients">
        <MyClients />
      </Element> */}
      <Element name="contact-me">
        <ContactMe />
        <Footer/>
      </Element>
      
    </>
  );
}

export default App;
