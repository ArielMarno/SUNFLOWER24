import '../styles/portfolio.css';
import hogar from '../assets/portfolio/hogar.webp';
import m44 from '../assets/portfolio/muebles44.webp';
import liz from '../assets/portfolio/lizsmarketing.webp';

import AOS from 'aos';
AOS.init();

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
        <div className='portfolio-title' data-aos="fade-up">
            <h2>WE <span>SHOW YOU </span>SOME OF</h2>
            <h2 className='middle'><span>OUR</span> MOST OUTSTANDING</h2>
            <h2><span>COLLABORATIONS</span></h2>
        </div>
        <div className='portfolio-cases'>

            <div className='case'>
                <div className='case_image'>
                    <img src={hogar} alt="Hogar Paz y Bien" data-aos="fade-up"/>
                </div>
                <div className='case_content'>
                    <h3 data-aos="fade-up">HOGAR PAZ Y BIEN</h3>
                    <p data-aos="fade-up">In this collaboration we worked on a digital rebranding for one of the top-rated senior residences in the Buenos Aires province. Pablo, the owner, reached out to us with the idea of refreshing their image, redesigning their logo, and creating a website. As a family-owned business with a long history, we collaborated to maintain their essence and convey their values.</p>
                </div>
            </div>

            <div className='case middle'>
                <div className='case_content'>
                    <h3 data-aos="fade-up">MUEBLES 44</h3>
                    <p data-aos="fade-up">With more than 8 years of experience, Bárbara and Gonzalo decided to start selling online. They created a virtual store and a landing page to promote their products, including furniture, decorative items, and artificial plants. Through Google Business and advertising campaigns, they managed to build trust, gain recognition, and increase their sales.</p>
                </div>
                <div className='case_image'>
                    <img src={m44} alt="Muebles 44" data-aos="fade-up"/>
                </div>
            </div>

            <div className='case'>
                <div className='case_image'>
                    <img src={liz} alt="Liz Marketing" data-aos="fade-up"/>
                </div>
                <div className='case_content'>
                    <h3 data-aos="fade-up">LIZ'S MARKETING</h3>
                    <p data-aos="fade-up">Elizabeth contacted us with the idea of creating a space where she could explain to her potential clients, in a simple but coherent way, what she does and the services she offers. Based on this idea, we developed a Landing Page together, maintaining the style of her social media and the personality of her brand.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Portfolio