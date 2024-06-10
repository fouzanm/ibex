import style from './Navbar.module.css'
import Logo from "../../assets/ibex.png"
import { IoIosSettings, IoIosPeople } from "react-icons/io";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { TbMessages, TbBrandAbstract } from "react-icons/tb";
import { LuShoppingBag } from "react-icons/lu";

const Navbar = ({activeSection}) => {
    const navItems = ['Home', 'Messages', 'E-Commerce', 'Connection', 'Portfolio', 'Social Media'];
    const navLink = [<IoHomeOutline />, <TbMessages />, <LuShoppingBag />, <IoIosPeople />, <IoPersonOutline />, <TbBrandAbstract />];

    return (
        <div className={style.navbar}>
            <div className={style.title}>
                <img src={Logo}/>
            </div>
            <div className={style.navItems}>
                {navItems.map((item, index) => (
                    <li key={index} className={`${style.navLink} ${item === 'Messages' && style.active}`}>
                        {navLink[index]}
                         {item}</li>
                ))}
            </div>
            <div className={`${style.navItems} ${style.settings}`}>
                <div className={`${style.navLink} ${style.active}`}>
                    <IoIosSettings /> Settings
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;