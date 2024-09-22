import '../styles/about.css';
import about from '../assets/about-mk.webp';

const About = () => {
  return (
    <div className='about'>
        <div className='about-image'>
            <img src={about} alt="smarthphone" />
        </div>
        <div className='about-title'>
            <div className='title'>
                <h2>TRABAJAMOS CON <span>CREATIVIDAD</span></h2><br />
                <h2 className='middle'>PARA <span>IMPACTAR</span> EN EL <span>CRECIMIENTO</span></h2> <br />
                <h2> DE TU NEGOCIO.</h2>
            </div>
            <section>
                <p>Generá <span>confianza</span> en tu público para convertirlos en potenciales clientes.</p>
                <p className='middle-text'>Transformá la <span>imagen</span> de tu marca a una que te represente de verdad.</p>
                <p>Maximizá tu <span>alcance</span> de manera clara y sostenible, a mediano y largo plazo.</p>
            </section>
        </div>

    </div>
  )
}

export default About