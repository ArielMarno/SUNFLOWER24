import '../styles/services.css';
import arrow from '../assets/arrow_sf.webp';

import AOS from 'aos';
AOS.init();

const Services = () => {
  return (
    <div className='services' id='services'>
        <div className='services-title' data-aos="fade-up">
            <h2>GIVE YOUR BRAND A LEAP IN <span>QUALITY</span>,</h2>
            <h2 className='middle'>IMPROVE YOUR <span>STRATEGY</span> AND THE WAY THAT</h2>
            <h2>YOU REACH YOUR <span>CUSTOMERS.</span></h2>
        </div>
        <div className='services-content'>
            <div className='content_btn' data-aos="fade-up">
                <p>Build a strong identity that sets you apart from your competition and positions you as the best.</p>
                <a href="https://wa.link/3t3cir">FREE CONSULTATION<img src={arrow} alt="arrow" /></a>
            </div>
            <div className='content_services'>
                <div data-aos="fade-up"><span>01_</span><h3>WEB DESIGN<br />AND DEVELOPMENT</h3></div>
                <div data-aos="fade-up"><span>02_</span><h3>ADVERTISING <br />CAMPAIGNS</h3></div>
                <div data-aos="fade-up"><span>03_</span><h3>IDENTITY <br />AND BRAND</h3></div>
                <div data-aos="fade-up"><span>04_</span><h3>MULTIMEDIA  <br />EDITING</h3></div>
            </div>
        </div>
    </div>
  )
}

export default Services