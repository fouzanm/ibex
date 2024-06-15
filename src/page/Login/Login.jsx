import { useState } from "react";
import Logo from "../../assets/ibex.png"
import Google from "../../assets/google.webp"
import Facebook from "../../assets/facebook.png"
import bg1 from "../../assets/bg-1.png"
import bg2 from "../../assets/bg-2.png"
import style from './Login.module.css'
import { Link, useNavigate } from "react-router-dom";
import ResetPassword from "../../component/ResetPassword/ResetPassword";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextInput from "../../component/TextInput/TextInput";

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        let username = ev.target[0].value;
        let password = isLogin ? ev.target[1].value : ev.target[2].value;
        if (isLogin) {
            if (username && password) {
                toast.success('Login successful! Welcome back!');
                navigate('chat');
            } else {
                toast.warn("Please ensure all fields are completed");
            };
        } else {
            let email = ev.target[1].value;
            let password2 = !isLogin && ev.target[3].value;
            if (password !== password2) {
                toast.error('Passwords do not match. Please try again.');
            } else if ( username && email && password) {
                toast.success('Registration successful! Welcome aboard!');
                navigate('chat');
            } else {
                toast.warn("Please ensure all fields are completed");
            };
        };
    };
    
    return (
        <div className={style.login}>
            {isPasswordReset && <ResetPassword setOpenModal={setIsPasswordReset}/>}
            <ToastContainer position= "top-right" autoClose= {3000} theme= "colored"/>
            <div className={style.container}>
                <div className={style.imageWrapper}>
                    <img src={isLogin ? bg1 : bg2}/>
                </div>
                <div className={style.formWrapper}>
                    <div className={style.formHeader}>
                        <div className={style.title}>
                            <img src={Logo}/>
                            <div className={style.heading}>
                                <h1>{isLogin ? 'Welcome Back to Ibex!': 'Simplify Your World!'}</h1>
                            </div>
                        </div>
                        <div className={style.description}>
                            <span>
                                {isLogin ? 'Ready to dive back in? Log in now to access your streamlined chat and advanced e-commerce tools, and keep your productivity soaring effortlessly.'
                                :'Join now to seamlessly integrate Ibex into your life and unlock streamlined chat and e-commerce solutions for maximum productivity.'}
                            </span>
                        </div>
                    </div>
                    <div className={style.body}>
                        <form onSubmit={handleSubmit} className={`${style.formSection} ${!isLogin && style.joinSection}`}>
                            <TextInput label={isLogin ? 'Username or Email' : "Name"}/>
                            {!isLogin && <TextInput label="Email" type="email"/>}
                            <TextInput label="Password" type="password"/>
                            {!isLogin &&<TextInput label="Confirm Password" type="password"/>}
                            {isLogin && <span className={style.forgotPassword} onClick={() => setIsPasswordReset(true)}>Forgot Password?</span>}
                            <button className={style.submit} type="submit">{isLogin ? 'Step Inside':'Get Started'}</button>
                        </form>
                        <div className={style.label}>
                            <span>{isLogin ? "Don't" : "Already"} have an account? <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Join' : 'Login'}</button></span>
                        </div>
                    </div>
                    <div className={style.footer}>
                        <div className={style.lines}>
                            <p className={style.divide}>OR</p>
                        </div>
                        <div className={style.buttonGroup}>
                            <button><img src={Google}/>Google</button>
                            <button><img src={Facebook}/>Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;