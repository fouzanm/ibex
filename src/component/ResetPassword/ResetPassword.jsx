import style from './ResetPassword.module.css'
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextInput from '../TextInput/TextInput';

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
                    <h2>Reset Your Password</h2>
                </div>
                <div className={style.body}>
                    <form className={style.formSection}>
                        <TextInput type='email' label="Email"/>
                        <TextInput type='password' label="New Password"/>
                        <TextInput type='password' label="Confirm Password"/>
                    </form>
                </div>
                <div className={style.footer}>
                    <button className={style.cancelBtn} onClick={() => {setOpenModal(false);}}>
                        Back to Login
                    </button>
                    <button  className={style.confirmBtn} onClick={handleResetPassword}>Reset Password</button>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
