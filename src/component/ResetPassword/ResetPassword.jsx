import style from './ResetPassword.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextInput from '../TextInput/TextInput';

const ResetPassword = ({setOpenModal}) => {
    const handleResetPassword = (ev) => {
        ev.preventDefault();
        let email = ev.target[0].value;
        let password1 = ev.target[1].value;
        let password2 = ev.target[2].value;
        if (!email || !password1 || !password2) {
            toast.warn('Passwords do not match. Please try again.');
        } else if (password1 !== password2) {
            toast.error('Passwords do not match. Please re-enter.');
        } else {
            setOpenModal(false);
            toast.success('Password successfully changed!');
        };
    };

    return (
        <div className={style.modalBackground}>
            <div className={style.modalContainer}>
                <div className={style.title}>
                    <h2>Reset Your Password</h2>
                </div>
                <div className={style.body}>
                    <form className={style.formSection} onSubmit={handleResetPassword}>
                        <TextInput type='email' label="Email"/>
                        <TextInput type='password' label="New Password"/>
                        <TextInput type='password' label="Confirm Password"/>
                        <div className={style.footer}>
                            <button className={style.cancelBtn} type='button' onClick={() => {setOpenModal(false);}}>
                                Back to Login
                            </button>
                            <button  className={style.confirmBtn} type='submit'>Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
