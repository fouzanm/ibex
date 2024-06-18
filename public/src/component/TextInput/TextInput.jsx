import { useState } from 'react';
import style from'./TextInput.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const TextInput = ({ type = 'text', label }) => {
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={style.textInput}>
            <input type={type === 'text' || showPassword ? 'text' : type} value={value} onChange={(ev) => setValue(ev.target.value)} />
            {type === 'password' && <span className={style.password} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>}
            <label className={value && style.filled} htmlFor={name}>
                {label}
            </label> 
        </div>
    )
};

export default TextInput;