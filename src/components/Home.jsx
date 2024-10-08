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
              <a href="#nosotros">Nosotros</a>
              <a href="#servicios">Servicios</a>
              <a href="#portafolio">Portafolio</a>
              <a href="#contacto">Contacto</a>
            </section>
            <div className="burguer">
                <Burguer handleClick={handleClick}/> 
            </div>
        </nav>
        <main>
            <div className='title'>
                <h1>AGENCIA DE <br />
                <span className='cursive'>marketing </span>
                DIGITAL</h1>
                <p>Combinamos <span>innovación</span> con <span>estrategias</span> certeras para mejorar tu presencia en la web y ayudarte a alcanzar tus <span>objetivos comerciales</span>.
                </p>

                <a className='calendly-inline-widget' href="https://calendly.com/contacto-xv2x/sunflower" onClick={handleClickCalendly}>Asesoría Gratuita</a>
            </div>
            <div className='home-img'>
                <img src={person} alt="persona-flores" />
            </div>
        </main>

    </div>
  )
}

export default Home