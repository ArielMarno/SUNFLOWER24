import '../styles/about.css';
import about from '../assets/about-mk.webp';
import AOS from 'aos';
AOS.init();

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-image' data-aos="fade-up">
            <img src={about} alt="smarthphone" />
        </div>
        <div className='about-title' data-aos="fade-up">
            <div className='title'>
                <h2>WE WORK WITH  <span>CREATIVITY</span></h2>
                <h2 className='middle'>TO <span>IMPACT THE GROWTH</span></h2>
                <h2> OF YOUR BUSINESS.</h2>
            </div>
            <section>
                <p data-aos="fade-up">Build <span>trust</span> in your audience to convert them into potential customers.</p>
                <p className='middle-text' data-aos="fade-up"><span>Transform</span> your brand image to one that truly represents you.</p>
                <p data-aos="fade-up">Maximize your <span>reach</span> in a clear and sustainable way, in the medium and long term.</p>
            </section>
        </div>

    </div>
  )
}

export default About