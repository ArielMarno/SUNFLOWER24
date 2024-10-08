import '../styles/portfolio.css';
import hogar from '../assets/portfolio/hogar.webp';
import m44 from '../assets/portfolio/muebles44.webp';
import liz from '../assets/portfolio/lizsmarketing.webp';

import AOS from 'aos';
AOS.init();

const Portfolio = () => {
  return (
    <div className='portfolio' id='portafolio'>
        <div className='portfolio-title' data-aos="fade-up">
            <h2>TE MOSTRAMOS ALGUNAS DE</h2>
            <h2 className='middle'>NUESTRAS<span> COLABORACIONES</span><br /></h2>
            <h2>MAS <span>DESTACADAS</span></h2>
        </div>
        <div className='portfolio-cases'>

            <div className='case'>
                <div className='case_image'>
                    <img src={hogar} alt="Hogar Paz y Bien" data-aos="fade-up"/>
                </div>
                <div className='case_content'>
                    <h3 data-aos="fade-up">HOGAR PAZ Y BIEN</h3>
                    <p data-aos="fade-up">En esta colaboración participamos en un re-branding digital de una de las mas cualificadas residencias del adulto mayor en la provincia de Buenos Aires. <br />Pablo, su dueño, nos contacto con la idea de renovar su imagen, su logo y crear una página web. Al ser un negocio familiar y con trayectoria, trabajamos en conjunto para mantener su esencia y transmitir sus valores. </p>
                </div>
            </div>

            <div className='case middle'>
                <div className='case_content'>
                    <h3 data-aos="fade-up">MUEBLES 44</h3>
                    <p data-aos="fade-up">Con mas de 8 años de trayectoria, Bárbara y Gonzalo, decidieron comenzar a vender de manera online. Creando una tienda virtual y una landing page para promocionar sus productos, entre ellos: muebles, artículos de decoración y plantas artificiales.<br />A través de Google Negocios y campañas publicitarias lograron generar confianza, reconocimiento e incrementar sus ventas.</p>
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
                    <p data-aos="fade-up">Elizabeth se puso en contacto con nosotros con la idea de crear un espacio en el que pudiera explicar a sus potenciales clientes, de forma simple pero consistente,  a que se dedica y los servicios que ofrece. <br />A partir de esta idea desarrollamos una Landing Page en conjunto manteniendo el estilo de sus redes sociales y la personalidad de su marca.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Portfolio