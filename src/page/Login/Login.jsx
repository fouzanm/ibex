import { useState } from "react";
import Logo from "../../assets/ibex.png"
import style from './Login.module.css'
import { Link, useNavigate } from "react-router-dom";
import ResetPassword from "../../component/ResetPassword/ResetPassword";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        let username = ev.target[0].value;
        let password = ev.target[1].value;
        if (!username || !password) {
            toast.warn('Please fill in all fields');
        } else {
            toast.success('Successfully Logined');
        }
        navigate('/')
    }

    return <> <div className="formContainer">
        {isPasswordReset && <ResetPassword setOpenModal={setIsPasswordReset}/>}
        <ToastContainer position= "top-right" autoClose= {3000} theme= "colored"/>
        <div className="formWrapper">
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
        </div>
    </div>
    </>

}

export default Login;