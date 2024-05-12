import style from './ResetPassword.module.css'
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = ({setOpenModal}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const refEmail = useRef(null);
    const refPassword = useRef(null);
    const refConfirmPassword = useRef(null);

    const handleResetPassword = () => {
        let email = refEmail.current.value;
        let password1 = refPassword.current.value;
        let password2 = refConfirmPassword.current.value;
        if (!email || !password1 || !password2) {
            toast.warn('Please fill in all fields');
        } else if (password1 !== password2) {
            toast.error('Passwords are not matching');
            refConfirmPassword.current.value = null;
        } else {
            setOpenModal(false);
            toast.success('Password Changed');
        }
    }

    return (
        <div className={style.modalBackground}>
            <div className={style.modalContainer}>
                <div className={style.title}>
                    <h2>Reset your password</h2>
                </div>
                <div className={style.body}>
                    <form>
                        <input type="email" placeholder="Email" ref={refEmail}/> 
                        <div className="passwordWrapper">
                            <input type={showPassword ? "text" : "password"} 
                                placeholder="NewPassword" ref={refPassword}/>
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className="passwordWrapper">
                            <input  type={showConfirmPassword ? "text" : "password"} 
                                placeholder="Confirm Password" ref={refConfirmPassword}/>
                            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </form>
                </div>
                <div className={style.footer}>
                    <button className={style.cancelBtn} onClick={() => {setOpenModal(false);}}>
                        Back to Login
                    </button>
                    <button onClick={handleResetPassword}>Reset Password</button>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
