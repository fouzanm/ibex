import { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Navbar from '../../component/Navbar/Navbar';
import style from './Chat.module.css'
import Message from '../../component/Messages/Message';
import User from '../../assets/user1.jpg'
import Me from '../../assets/user2.jpg'
import { IoCallOutline, IoSend, IoVideocamOutline } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { TiMicrophone } from "react-icons/ti";
import { FaRegFaceSmile } from "react-icons/fa6";

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
                <div className={style.messageContainer}>
                    <div className={style.navbar}>
                        <IoCallOutline />
                        <IoVideocamOutline />
                        <img src={Me}/>
                    </div>
                    <div className={style.messageSection}>
                        <div className={style.container}>
                            <div className={style.activeUser}>
                                
                            </div>
                            <div className={style.content}>Content</div>
                            <div className={style.inputContainer}>
                                <span className={style.emoji}><FaRegFaceSmile /></span>
                                <input placeholder='Your Message'/>
                                <span className={style.inputAction}>
                                    <GrAttachment />
                                    <FaRegImages />
                                    <TiMicrophone />
                                    <IoSend />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat;