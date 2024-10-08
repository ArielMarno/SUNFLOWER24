import React, { useState } from 'react';
import '../styles/contact.css';
import arrow from '../assets/arrow_sf.webp';

import AOS from 'aos';
AOS.init();


const Contact = () => {

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
  });

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div className='contact' id='contacto'>
        <div className='contact-title'>
            <p data-aos="fade-up"><span>Empeza hoy mismo</span>, dale una dirección clara a  tu crecimiento. Déjanos tus<span> datos de contacto</span> y nuestro equipo se comunicara con vos lo antes posible para coordinar una reunión y analizar como <span>podemos ayudarte</span>.</p>
            <div className='title' data-aos="fade-up">
                <h2><span>NO SIGAS POSPONIENDO</span> EL</h2>
                <h2 className='middle'>CRECIMIENTO DE TU NEGOCIO,</h2>
                <h2><span>DIGITALIZATE</span> CON NOSOTROS.</h2>
            </div>
        </div>
        <form action="https://formspree.io/f/myzgrlwn" method="POST">
                <label htmlFor="nombre"></label>
                <input type="text" name='nombre' id='nombre' placeholder='Nombre' value={formData.nombre} autoComplete="off" onChange={handleInputChange} required data-aos="fade-up"/>

                <label htmlFor="telefono"></label>
                <input type="number" name='telefono' id='telefono' placeholder='Teléfono' value={formData.telefono} autoComplete="off" onChange={handleInputChange} required data-aos="fade-up"/>

                <label htmlFor="email"></label>
                <input type="mail" name='email' id='email' placeholder='Email' value={formData.email} autoComplete="off" onChange={handleInputChange} required data-aos="fade-up"/>

                <label htmlFor="comentario"></label>
                <textarea name="mensaje" id="comentario" placeholder='Cómo te gustaría que te ayudemos?' data-aos="fade-up"></textarea>

                <button type="submit" data-aos="fade-up">CONTACTANOS <img src={arrow} alt="flecha" /></button>
        </form>

    </div>
  )
}

export default Contact