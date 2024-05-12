import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className={style.wrapper}>
                <a className={style.title}>Fouzan M</a>
                <div className={style.navbar}>
                    <a className={style.navItem} href='#portfolio'><span>Home</span></a>
                    <a className={style.navItem} href='#about'><span>About</span></a>
                    <a className={style.navItem} href='#resume'><span>Resume</span></a>
                    <a className={style.navItem} href='#skill'><span>Skill</span></a>
                    <a className={style.navItem} href='#project'><span>Project</span></a>
                    <a className={style.navItem} href='#contact'><span>Contact</span></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;