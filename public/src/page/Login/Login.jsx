import { useEffect, useState } from "react";
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
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { BASE_URL } from "../../utils";
import { useCookies } from "react-cookie";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['ibex']);
    const queryParams = new URLSearchParams(location.search);
    const initialAuth = queryParams.get('mode') || 'login';

    const [isLogin, setIsLogin] = useState(initialAuth === 'login');
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const generateError = (error) => toast.error(error);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        let email = isLogin ? ev.target[0].value : ev.target[1].value;
        let password = isLogin ? ev.target[1].value : ev.target[2].value;
        if (isLogin) {
            if (email && password) {
                const {data} = await axios.post(`${BASE_URL}/login`, {email, password}, {withCredentials: true});
                if (data?.errors) {
                    let {email, password} = data.errors;
                    if (email) generateError(email);
                    else if (password) generateError(password);
                } else if (data?.created) {
                    toast.success('Login successful! Welcome back!');
                    navigate('/');
                }; 
            } else {
                toast.warn("Please ensure all fields are filled");
            };
        } else {
            let username = ev.target[0].value;
            let password2 = !isLogin && ev.target[3].value;
            if (password !== password2) {
                toast.error('Passwords do not match. Please try again.');
            } else if ( username && email && password) {
                const {data} = await axios.post(`${BASE_URL}/register`, {username, email, password}, {withCredentials: true});
                if (data?.errors) {
                    let {email, password} = data.errors;
                    if (email) generateError(email);
                    else if (password) generateError(password);
                } else if (data?.created) {
                    toast.success('Registration successful! Welcome aboard!');
                    navigate('/');
                };
            } else {
                toast.warn("Please ensure all fields are filled");
            };
        };
    };

    const handleAuth = () => {
        navigate(`/auth?mode=${isLogin ? 'signup': 'login'}`);
        setIsLogin(!isLogin);
    };
    
    return (
        <div className={style.login}>
            {isPasswordReset && <ResetPassword setOpenModal={setIsPasswordReset}/>}
            {/* <ToastContainer position= "top-right" autoClose= {3000} theme= "colored"/> */}
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
                            {!isLogin && <TextInput label="Name"/>}
                            <TextInput label="Email" type="email"/>
                            <TextInput label="Password" type="password"/>
                            {!isLogin &&<TextInput label="Confirm Password" type="password"/>}
                            {isLogin && <span className={style.forgotPassword} onClick={() => setIsPasswordReset(true)}>Forgot Password?</span>}
                            <button className={style.submit} type="submit">{isLogin ? 'Step Inside':'Get Started'}</button>
                        </form>
                        <div className={style.label}>
                            <span>{isLogin ? "Don't" : "Already"} have an account? <button onClick={handleAuth}>{isLogin ? 'Join' : 'Login'}</button></span>
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