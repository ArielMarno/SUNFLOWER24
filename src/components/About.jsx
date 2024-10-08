import '../styles/about.css';
import about from '../assets/about-mk.webp';
import AOS from 'aos';
AOS.init();

const About = () => {
  return (
    <div className='about' id='nosotros'>
        <div className='about-image' data-aos="fade-up">
            <img src={about} alt="smarthphone" />
        </div>
        <div className='about-title' data-aos="fade-up">
            <div className='title'>
                <h2>TRABAJAMOS CON <span>CREATIVIDAD</span></h2>
                <h2 className='middle'>PARA <span>IMPACTAR</span> EN EL <span>CRECIMIENTO</span></h2>
                <h2> DE TU NEGOCIO.</h2>
            </div>
            <section>
                <p data-aos="fade-up">Generá <span>confianza</span> en tu público para convertirlos en potenciales clientes.</p>
                <p className='middle-text' data-aos="fade-up">Transformá la <span>imagen</span> de tu marca a una que te represente de verdad.</p>
                <p data-aos="fade-up">Maximizá tu <span>alcance</span> de manera clara y sostenible, a mediano y largo plazo.</p>
            </section>
        </div>

    </div>
  )
}

export default About