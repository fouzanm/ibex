import { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Navbar from '../../component/Navbar/Navbar';
import style from './Chat.module.css'

const Chat = () => {
    const [count, setCount] = useState(4);
    return (
        <>
            <Navbar activeSection={"Messages"}/>
            <div className={style.section}>
                <div className={style.messages}>
                    <div className={style.title}>
                        <span>Messages<p>({count})</p></span>
                        <FaRegEdit />
                    </div>
                    <div className={style.search}>
                        <input type='text' placeholder='Search'/>
                        <span><CiSearch /></span>
                    </div>
                    <div className={style.userContainer}>
                        Contacts
                    </div>
                </div>
                <div className={style.messageContainer}></div>
            </div>
        </>
    )
}

export default Chat;