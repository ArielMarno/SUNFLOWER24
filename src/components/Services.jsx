import '../styles/services.css';
import arrow from '../assets/arrow_sf.webp';

import AOS from 'aos';
AOS.init();

const Services = () => {
  return (
    <div className='services' id='servicios'>
        <div className='services-title' data-aos="fade-up">
            <h2>DALE UN SALTO DE <span>CALIDAD</span> A TU MARCA,</h2>
            <h2 className='middle'>MEJORA TU <span>ESTRATEGIA</span> Y LA FORMA EN LA </h2>
            <h2>QUE LLEGAS A TUS <span>CLIENTES</span>.</h2>
        </div>
        <div className='services-content'>
            <div className='content_btn' data-aos="fade-up">
                <p>Construí una identidad fuerte que te diferencie de tu competencia y te posicione como el mejor.</p>
                <a href="https://wa.link/3t3cir">CONSULTA GRATUITA<img src={arrow} alt="flecha" /></a>
            </div>
            <div className='content_services'>
                <div data-aos="fade-up"><span>01_</span><h3>DISEÑO Y <br />DESARROLLO WEB</h3></div>
                <div data-aos="fade-up"><span>02_</span><h3>CAMPAÑAS <br />PUBLICITARIAS</h3></div>
                <div data-aos="fade-up"><span>03_</span><h3>IDENTIDAD <br />Y MARCA</h3></div>
                <div data-aos="fade-up"><span>04_</span><h3>EDICIÓN <br />MULTIMEDIA</h3></div>
            </div>
        </div>
    </div>
  )
}

export default Services