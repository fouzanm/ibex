import { useEffect, useRef, useState } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import style from './Portfolio.module.css'
import Home from '../../component/Home/Home';


const Portfolio = () => {
    const [activeSection, setActiveSection] = useState(null);
    const sections = useRef([]);

    const handleScroll = () => {
        const pageYOffset = window.scrollY;
        let newActiveSection = null;
        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop - 250;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
                newActiveSection = section.id;
            }
        });
        setActiveSection(newActiveSection);
    };
    
    useEffect(() => {
        sections.current = document.querySelectorAll('.section');
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id='portfolio' className='portfolio'>
            {/* <Navbar activeSection={activeSection || 'home'}/>
            <div className='section' id='home'><Home/></div>
            <div className='section' id='about'>About</div>
            <div className='section' id='resume'>Resume</div>
            <div className='section' id='skill'>Skill</div>
            <div className='section' id='project'>Project</div>
            <div className='section' id='contact'>Contact</div> */}
        </section>

    )
}

export default Portfolio;