import { useState } from "react";
import Logo from "../../assets/ibex.png"
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        let name = ev.target[0].value;
        let email = ev.target[1].value;
        let password1 = ev.target[2].value;
        let password2 = ev.target[3].value;
        if (!name || !email || !password1 || !password2) {
            toast.warn('Please fill in all fields');
        } else if (password1 !== password2) {
            toast.error('Passwords are not matching');
        } else {
            toast.success('Successfully Registered');
        }
        ev.target[2].value = null;
        ev.target[3].value = null;
        navigate('/')
    }

    return <div className="formContainer">
        <ToastContainer position= "top-right" autoClose= {3000} theme= "colored"/>
        <div className="formWrapper">
            <div className="title">
                <img className="ibex" src={Logo}/>
                <h1 className="logo">ibex</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name"/> 
                <input type="email" placeholder="Email"/>
                <div className="passwordWrapper">
                    <input type={showPassword ? "text" : "password"} placeholder="Password"/>
                    <span onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <div className="passwordWrapper">
                    <input  type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password"/>
                    <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <button>Sign Up</button>
            </form>
            <p>Already have an account? <Link to='/login'>Log in</Link></p>
        </div>
    </div>
}

export default Register