import style from './Home.module.css'
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const Home = () => {
    return (<div className={style.home}>
        <motion.div className={style.wrapper} variants={textVariants} initial="initial" animate="animate">
            <span className={style.subHeading}>Hello!</span>
            <div>
                <h1>I'm <span>Fouzan M</span>,</h1>
                <h2>A developer based in Kerala, India</h2>
            </div>
            <div className={style.buttonLink}>
                <a className={style.hire} href="#" >Hire me</a>
                <a className={style.works} href="#" >My works</a>
            </div>
        </motion.div>
        <div className={style.imageWrapper}>
            <img src='' alt='' />
        </div>
    </div>)
}

export default Home;