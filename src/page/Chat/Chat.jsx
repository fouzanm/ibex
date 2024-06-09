import { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Navbar from '../../component/Navbar/Navbar';
import style from './Chat.module.css'
import Message from '../../component/Messages/Message';
import User from '../../assets/user1.jpg'

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
                        <Message image={User} name='Thomas Muller' message='Hey, how are u?' time='10.25' count={1}/>
                        <Message image={User} name='Cristiano Ronaldo' message='Hey, how are u?' time='9.58' count={0}/>
                        <Message image={User} name='Messi' message='Hey, how are u?' time='9.45' count={3}/>
                        <Message image={User} name='Karim Benzema' message='Hey, how are u?' time='8.50' count={1}/>
                        <Message image={User} name='Lewandowski' message='Hey, how are u?' time='7.02' count={0}/>
                        <Message image={User} name='Joshua Kimmich' message='Hey, how are u?' time='4.47' count={2}/>
                        <Message image={User} name='Neuer' message='Hey, how are u?' time='4.46' count={4}/>
                        <Message image={User} name='Jamal Musiala' message='Hey, how are u?' time='1.19' count={1}/>
                        <Message image={User} name='Antony' message='Hey, how are u?' time='12.02' count={1}/>
                        <Message image={User} name='Deligt' message='Hey, how are u?' time='12.02' count={1}/>
                        <Message image={User} name='Leon Goretzka' message='Hey, how are u?' time='12.02' count={1}/>
                        <Message image={User} name='Leroy' message='Hey, how are u?' time='12.02' count={1}/>
                    </div>
                </div>
                <div className={style.messageContainer}></div>
            </div>
        </>
    )
}

export default Chat;