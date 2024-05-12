import style from './Navbar.module.css'
import Logo from "../../assets/ibex.png"

const Navbar = ({activeSection}) => {
    return (
        <div className='navbar'>
            <div className={style.wrapper}>
                <div className={style.title}>
                    <img className={style.ibex} src={Logo}/>
                    <h1 className={style.logo}>ibex</h1>
                </div>
                <nav className={style.navbar}>
                    <a className={`${style.navItem} ${activeSection === 'home' ? style.active : ''}`} href='#home'><span>Home</span></a>
                    <a className={`${style.navItem} ${activeSection === 'about' ? style.active : ''}`} href='#about'><span>About</span></a>
                    <a className={`${style.navItem} ${activeSection === 'resume' ? style.active : ''}`} href='#resume'><span>Resume</span></a>
                    <a className={`${style.navItem} ${activeSection === 'skill' ? style.active : ''}`} href='#skill'><span>Skill</span></a>
                    <a className={`${style.navItem} ${activeSection === 'project' ? style.active : ''}`} href='#project'><span>Project</span></a>
                    <a className={`${style.navItem} ${activeSection === 'contact' ? style.active : ''}`} href='#contact'><span>Contact</span></a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;