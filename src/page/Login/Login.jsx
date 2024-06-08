import { useState } from "react";
import Logo from "../../assets/ibex.png"
import Google from "../../assets/google.webp"
import Facebook from "../../assets/facebook.png"
import bg1 from "../../assets/bg-1.png"
import bg2 from "../../assets/bg-2.png"

import style from './Login.module.css'
import { Link, useNavigate } from "react-router-dom";
import ResetPassword from "../../component/ResetPassword/ResetPassword";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextInput from "../../component/TextInput/TextInput";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const navigate = useNavigate();
    console.log('isLogin', isLogin)
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log(ev)

        // let username = ev.target[0].value;
        // let password = ev.target[1].value;
        // if (!username || !password) {
        //     toast.warn('Please fill in all fields');
        // } else {
        //     toast.success('Successfully Logined');
        // }
        // navigate('/')
    }

    return <>
     <div className={style.login}>
        {isPasswordReset && <ResetPassword setOpenModal={setIsPasswordReset}/>}
        {/* <ToastContainer position= "top-right" autoClose= {3000} theme= "colored"/> */}
        <div className={style.imageWrapper}>
            <img src={isLogin ? bg1 : bg2}/>
        </div>
        <div className={style.formWrapper}>
            <div className={style.title}>
                <img src={Logo}/>
                <div className={style.heading}>
                    <h1>{isLogin ? 'Welcome Back to Ibex!': 'Simplify Your World!'}</h1>
                </div>
                
            </div>
            <div className={style.description}>
                <span>
                    {isLogin ? 'Ready to dive back in? Log in now to access your streamlined chat and e-commerce tools and keep your productivity soaring'
                    :'Join now to seamlessly integrate Ibex into your life and unlock streamlined chat and e-commerce solutions for maximum productivity.'}
                </span>
            </div>
            <form onSubmit={handleSubmit} className={style.formSection}>
                <TextInput label={isLogin ? 'Username or Email' : "Name"}/>
                {!isLogin && <TextInput label="Email" type="email"/>}
                <TextInput label="Password" type="password"/>
                {!isLogin &&<TextInput label="Confirm Password" type="password"/>}
                <div className={style.formButtons}>
                    {isLogin && <button className={`${style.forgotPassword} ${style.isLogin}`} onClick={() => setIsPasswordReset(true)}>Forgot Password?</button>}
                    <button className={`${style.submit} ${isLogin ? style.isLogin : style.isJoin}` } type="submit">{isLogin ? 'Step Inside':'Get Started'}</button>
                </div>
            </form>
            <div className={style.label}>
                <span>{isLogin ? "Don't" : "Already"} have an account? <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Join' : 'Login'}</button></span>
            </div>
            <div className={style.lines}>
                <p className={style.divide}>OR</p>
            </div>
            <div className={style.buttonGroup}>
                <button><img src={Google}/>Google</button>
                <button><img src={Facebook}/>Facebook</button>
            </div>
        </div>
        {/* <div className="formWrapper">
            <div className="title">
                <img className="ibex" src={Logo}/>
                <h1 className="logo">ibex</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name or Email"/>
                <div className="passwordWrapper">
                    <input type={showPassword ? "text" : "password"} placeholder="Password"/>
                    <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <div className={style.buttonGroups}>
                    <button type="button" onClick={() => setIsPasswordReset(true)} className={style.forgotPassword}>
                        Forgot Password ?
                    </button>
                    <button type="submit" className={style.login}>Login</button>
                </div>                
            </form>
            <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
        </div> */}
    </div>
    </>

}

export default Login;