
import React from 'react';

import '../styles/testimonies.css';

import milano from '../assets/testimonies/milano.webp';
import bs from '../assets/testimonies/bs.webp';
import camorra from '../assets/testimonies/camorra.webp';
import bruscagin from '../assets/testimonies/bruscagin.webp';

import arrow from '../assets/arrow_sf.webp';
import arrowleft from '../assets/arrow-left.webp';
import arrowright from '../assets/arrow-right.webp';

import AOS from 'aos';
AOS.init();

const Card = ({ image, name, text }) =>{
    return(
        <div className='card'>
            <img src={image} alt={image} />
            <h4>{name}</h4>
            <p>{text}</p>
        </div>
    )
};

const Testimonies = () => {

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
        current.scrollLeft -= 330;
        } else {
        current.scrollLeft += 330;
        }
    };

  return (
    <div className='testimonies' id='testimonios'>
        <div className='testimonies-title'>
            <div className='title' data-aos="fade-up">
                <h2>¿QUÉ OPINAN <span>NUESTROS</span></h2>
                <h2><span>CLIENTES</span> SOBRE NOSOTROS?</h2>
            </div>
            <div className='slider-arrows' data-aos="fade-up">
                <img id='left' src={arrowleft} alt="flecha izquierda" onClick={()=> scroll('left')}/>
                <img id='right' src={arrowright} alt="flecha derecha" onClick={()=> scroll('right')}/>
            </div>
            
        </div>

        <div className='testimonies-slider'>
        <div className='slider' ref={scrollRef} data-aos="fade-up">
                <Card image={milano} name="Casa Milano" text='"La calidad humana y profesionalismo con el que se manejan, hacen que tu proyecto sea soñado!! Gracias por acompañarnos en este desarrollo!!!🙌❤️ "'/>
                <Card image={bs} name="Fiamma Des" text='"Es un placer trabajar con Manu, está siempre atenta a cualquier inquietud a parte de que me explica todo. Me ayudo con el feed de ig, diseños de archivos para enviar a clientes y armar la página web ."'/>
                <Card image={bruscagin} name="Romina Bruscagin" text='"Excelente servicio.  La creación de la Landing Page superó todas mis expectativas. 💪🏼 Gracias 🙌🏼…"'/>
                <Card image={camorra} name="Nicolas Carmona" text='"Muy buena atención recibida y atentos a los detalles de las marcas, la atención personalizada 10/10"'/>
            </div>
        </div>
        <div className='seemore' data-aos="fade-up">
                <a href="https://www.google.com/maps/place/SunFlower+-+Agencia+digital/@-38.45155,-63.5989957,4z/data=!4m8!3m7!1s0x959c1175f62af1d5:0x7e398524dac9732f!8m2!3d-38.45155!4d-63.5989957!9m1!1b1!16s%2Fg%2F11v67f_73b?hl=es-419&entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D">VER MÁS<img src={arrow} alt="flecha" /></a>
        </div>

    </div>
  )
}

export default Testimonies