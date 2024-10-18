import React, { useState } from 'react';
import '../styles/contact.css';
import arrow from '../assets/arrow_sf.webp';

import AOS from 'aos';
AOS.init();


const Contact = () => {

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    phone: '',
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
            <p data-aos="fade-up"><span>Start today</span>, give a clear direction to your growth. Leave us your<span> contact details</span> and our team will get in touch with you as soon as possible to coordinate a meeting and discuss how <span> we can help you</span>.</p>
            <div className='title' data-aos="fade-up">
                <h2><span>STOP PUTTING OFF</span> THE</h2>
                <h2 className='middle'>GROWTH OF YOUR BUSINESS,</h2>
                <h2><span>GO DIGITAL</span> WITH US.</h2>
            </div>
        </div>
        <form action="https://formspree.io/f/myzgrlwn" method="POST">
                <label htmlFor="name"></label>
                <input type="text" name='name' id='name' placeholder='Name' value={formData.name} autoComplete="off" onChange={handleInputChange} required data-aos="fade-up"/>

                <label htmlFor="phone"></label>
                <input type="number" name='phone' id='phone' placeholder='Phone number' value={formData.phone} autoComplete="off" onChange={handleInputChange} required data-aos="fade-up"/>

                <label htmlFor="email"></label>
                <input type="mail" name='email' id='email' placeholder='Email' value={formData.email} autoComplete="off" onChange={handleInputChange} required data-aos="fade-up"/>

                <label htmlFor="message"></label>
                <textarea name="message" id="message" placeholder='How would you like us to help you?' data-aos="fade-up"></textarea>

                <button type="submit" data-aos="fade-up">CONTACT US <img src={arrow} alt="flecha" /></button>
        </form>

    </div>
  )
}

export default Contact