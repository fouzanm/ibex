import style from './Home.module.css'

const Home = () => {
    return (<div className={style.home}>
        <div className={style.wrapper}>
            <span className={style.subHeading}>Hello!</span>
            <h1>I'm <span>Fouzan M</span>,</h1>
            <h2>A developer based in Kerala, India</h2>
            <div className={style.buttonLink}>
                <a className={style.hire} href="#" >Hire me</a>
                <a className={style.works} href="#" >My works</a>
            </div>
        </div>
        <div className={style.imageWrapper}>
            <img src='' alt='' />
        </div>
    </div>)
}

export default Home;