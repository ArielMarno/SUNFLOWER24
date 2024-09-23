import '../styles/services.css';
import arrow from '../assets/arrow_sf.webp';

const Services = () => {
  return (
    <div className='services'>
        <div className='services-title'>
            <h2>DALE UN SALTO DE <span>CALIDAD</span> A TU MARCA,</h2>
            <h2 className='middle'>MEJORA TU <span>ESTRATEGIA</span> Y LA FORMA EN LA </h2>
            <h2>QUE LLEGAS A TUS <span>CLIENTES</span>.</h2>
        </div>
        <div className='services-content'>
            <div className='content_btn'>
                <p>Construí una identidad fuerte que te diferencie de tu competencia y te posicione como el mejor.</p>
                <a href="#">CONSULTA GRATUITA<img src={arrow} alt="flecha" /></a>
            </div>
            <div className='content_services'>
                <div><span>01_</span><h3>DISEÑO Y <br />DESARROLLO WEB</h3></div>
                <div><span>02_</span><h3>CAMPAÑAS <br />PUBLICITARIAS</h3></div>
                <div><span>03_</span><h3>IDENTIDAD <br />Y MARCA</h3></div>
                <div><span>04_</span><h3>EDICIÓN <br />MULTIMEDIA</h3></div>
            </div>
        </div>
    </div>
  )
}

export default Services