
import React from 'react';

import '../styles/testimonies.css';

import milano from '../assets/testimonies/milano.webp';
import bs from '../assets/testimonies/bs.webp';
import camorra from '../assets/testimonies/camorra.webp';
import bruscagin from '../assets/testimonies/bruscagin.webp';

import arrowleft from '../assets/arrow-left.webp';
import arrowright from '../assets/arrow-right.webp';

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
        current.scrollLeft -= 300;
        } else {
        current.scrollLeft += 300;
        }
    };

  return (
    <div className='testimonies'>
        <div className='testimonies-title'>
            <h2>TESTIMONIOS</h2>
            <p>QUE OPINAN NUESTROS CLIENTES SOBRE NOSOTROS?</p>
        </div>

        <div className='testimonies-slider'>
            <div className='slider' ref={scrollRef}>
                <Card image={milano} name="CASA MILANO" text='"La calidad humana y profesionalismo con el que se manejan, hacen que tu proyecto sea soñado!! Gracias por acompañarnos en este desarrollo!!!🙌❤️ "'/>
                <Card image={bs} name="FIAMMA DES" text='"Es un placer trabajar con Manu, está siempre atenta a cualquier inquietud a parte de que me explica todo para que pueda entender que es lo mejor para mis redes sociales. Me ayudo con el feed de ig, diseños de archivos para enviar a clientes y armar la página web ."'/>
                <Card image={bruscagin} name="Romina Bruscagin" text='"Excelente servicio.  La creación de la Landing Page superó todas mis expectativas. 💪🏼 Gracias 🙌🏼…"'/>
                <Card image={camorra} name="Nicolas Carmona" text='"Muy buena atención recibida y atentos a los detalles de las marcas, la atención personalizada 10/10"'/>
            </div>
            <div className='slider-arrows'>
                <img id='left' src={arrowleft} alt="flecha izquierda" onClick={()=> scroll('left')}/>
                <img id='right' src={arrowright} alt="flecha derecha" onClick={()=> scroll('right')}/>
            </div>
            
        </div>

    </div>
  )
}

export default Testimonies