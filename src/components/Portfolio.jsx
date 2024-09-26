import '../styles/portfolio.css';
import hogar from '../assets/portfolio/hogar.webp';
import m44 from '../assets/portfolio/muebles44.webp';
import liz from '../assets/portfolio/lizsmarketing.webp';

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className='portfolio-title'>
            <h2>TE MOSTRAMOS ALGUNAS DE NUESTRAS</h2>
            <h2><span>COLABORACIONES</span> MAS <span>DESTACADAS</span></h2>
        </div>
        <div className='portfolio-cases'>

            <div className='case'>
                <div className='case_image'>
                    <img src={hogar} alt="Hogar Paz y Bien" />
                </div>
                <div className='case_content'>
                    <h3>HOGAR PAZ Y BIEN</h3>
                    <p>En esta colaboración participamos en un re-branding digital de una de las mas cualificadas residencias del adulto mayor en la provincia de Buenos Aires. <br />Pablo, su dueño, nos contacto con la idea de renovar su imagen, su logo y crear una pagina web. Al ser un negocio familiar y con trayectoria, trabajamos en conjunto para mantener su esencia y transmitir sus valores. </p>
                </div>
            </div>

            <div className='case middle'>
                <div className='case_content'>
                    <h3>MUEBLES 44</h3>
                    <p>Con mas de 8 años de trayectoria, Barbara y Gonzalo, decidieron comenzar a vender de manera online. Creando una tienda virtual y una landing page para promocionar sus productos, entre ellos: muebles, artículos de decoración y plantas artificiales.<br />A través de Google Negocios y campañas publicitarias lograron generar confianza, reconocimiento e incrementar sus ventas.</p>
                </div>
                <div className='case_image'>
                    <img src={m44} alt="Muebles 44" />
                </div>
            </div>

            <div className='case'>
                <div className='case_image'>
                    <img src={liz} alt="Liz Marketing" />
                </div>
                <div className='case_content'>
                    <h3>LIZ'S MARKETING</h3>
                    <p>Elizabeth se puso en contacto con nosotros con la idea de crear un espacio en el que pudiera explicar a sus potenciales clientes, de forma simple pero consistente,  a que se dedica y los servicios que ofrece. <br />A partir de esta idea desarrollamos una Landing Page en conjunto manteniendo el estilo de sus redes sociales y la personalidad de su marca.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Portfolio