import { React, useState, useEffect } from 'react';
import '../styles/home.css';

import logo from '../assets/sf-logo.webp';
import person from '../assets/home_sf.webp';

import Burguer from './Burguer';

const Home = () => {

    const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
    setClick(!click);
  }

  useEffect(() => {
    const head = document.querySelector('head');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const handleClickCalendly = (event) => {
    event.preventDefault();
    window.Calendly.showPopupWidget('https://calendly.com/contacto-xv2x/sunflower');
  };

  return (
    <div className='home'>
        <nav>
            <a href="#"><img src={logo} alt="logo" /></a>
            <section className={`links ${click ? 'active' : ''}`}>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
              <div className='lenguage'>
                <a href="">EN</a>
                <p>/</p>
                <a href="https://sunfloweragencia.com/">ES</a>
              </div>
            </section>
            <div className="burguer">
                <Burguer handleClick={handleClick}/> 
            </div>
        </nav>
        <main>
            <div className='title'>
                <h1><span>DIGITAL</span> <br />
                <span className='cursive'>marketing </span>
                <span>AGENCY</span></h1>
                <p>We combine <span>innovation</span> with accurate <span>strategies</span> to improve your web presence and help you achieve your <span>business goals</span>.
                </p>

                <a className='calendly-inline-widget' href="https://calendly.com/contacto-xv2x/sunflower" onClick={handleClickCalendly}>Free Consultation</a>
            </div>
            <div className='home-img'>
                <img src={person} alt="persona-flores" />
            </div>
        </main>

    </div>
  )
}

export default Home