
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
                <h2>WHAT DO <span>OUR</span></h2>
                <h2 className='middle'><span>CLIENTS</span> THINKS </h2>
                <h2>ABOUT US?</h2>
            </div>
            <div className='slider-arrows' data-aos="fade-up">
                <img id='left' src={arrowleft} alt="flecha izquierda" onClick={()=> scroll('left')}/>
                <img id='right' src={arrowright} alt="flecha derecha" onClick={()=> scroll('right')}/>
            </div>
            
        </div>

        <div className='testimonies-slider'>
        <div className='slider' ref={scrollRef} data-aos="fade-up">
                <Card image={milano} name="Casa Milano" text='"The human quality and professionalism with which they are handled, make your project a dream! Thank you for joining us in this development!! 🙌❤️ "'/>
                <Card image={bs} name="Fiamma Des" text='"It is a pleasure to work with Manu, she is always attentive to any concern apart from the fact that she explains everything to me. I help with the ig feed, file designs to send to clients, and putting together the website."'/>
                <Card image={bruscagin} name="Romina Bruscagin" text='"Excellent service.  The creation of the Landing Page exceeded all my expectations. 💪🏼 Thank you 🙌🏼..."'/>
                <Card image={camorra} name="Nicolas Carmona" text='"Very good attention received and attentive to the details of the brands, personalized attention 10/10"'/>
            </div>
        </div>
        <div className='seemore' data-aos="fade-up">
                <a href="https://www.google.com/maps/place/SunFlower+-+Agencia+digital/@-38.45155,-63.5989957,4z/data=!4m8!3m7!1s0x959c1175f62af1d5:0x7e398524dac9732f!8m2!3d-38.45155!4d-63.5989957!9m1!1b1!16s%2Fg%2F11v67f_73b?hl=es-419&entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D">SEE MORE<img src={arrow} alt="arrow" /></a>
        </div>

    </div>
  )
}

export default Testimonies