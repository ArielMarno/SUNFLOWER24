import '../styles/footer.css';

import ig from '../assets/icons/ig.webp';
import lk from '../assets/icons/linkedin.webp';
import wp from '../assets/icons/wp.webp';

import AOS from 'aos';
AOS.init();

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='footer_links'>
                <a href="#" data-aos="fade-up">Home</a>
                <a href="#servicios" data-aos="fade-up">Servicios</a>
                <a href="#portafolio" data-aos="fade-up">Portafolio</a>
                <a href="#testimonios" data-aos="fade-up">Testimonios</a>
                <a href="#contacto" data-aos="fade-up">Contacto</a>
            </div>
            <div className='footer_contact'>
                <p className='cellphone' data-aos="fade-up">+54 9 1170-6852</p>
                <p className='email' data-aos="fade-up">contacto@sunfloweragencia.com</p>
                <div className='footer_contact-icons' data-aos="fade-up">
                    <a href="https://www.instagram.com/sunflower_agencia"><img src={ig} alt="instagram" /></a>
                    <a href="https://www.linkedin.com/company/sunfloweragencia"><img src={lk} alt="linkedin" /></a>
                    <a href="https://wa.link/3t3cir"><img src={wp} alt="whatsap" /></a>
                </div>
            </div>
        </div>
        <div className='footer-copy'>
            <p> © {new Date().getFullYear()} <span>SunFlower Agencia Digital</span>. Todos los derechos reservados.</p>  
        </div>
    </div>
  )
}

export default Footer