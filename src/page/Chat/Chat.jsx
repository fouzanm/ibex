import { useEffect, useRef, useState } from 'react';
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
import { IoMdMore } from "react-icons/io";

const Chat = () => {
    const [count, setCount] = useState(4);
    const lastMessageRef = useRef(null);

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    });
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
                    <div className={style.userSection}>
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
                </div>
                <div className={style.messageContainer}>
                    <div className={style.messageSection}>
                        <div className={style.container}>
                            <div className={style.activeUser}>
                                <div className={style.userDetails}>
                                    <img src={User}/>
                                    <span>Cristiano Ronaldo</span>
                                </div>
                                <div className={style.options}>
                                    <IoCallOutline />
                                    <IoVideocamOutline />
                                    <IoMdMore />
                                </div>
                            </div>
                            <div className={style.content}>
                                <span className={style.sent}>Hi</span>
                                <span className={style.receive}>Hello</span>
                                <span className={style.sent}>How are you?</span>
                                <span className={style.receive}>I'm good, thanks! How about you?</span>
                                <span className={style.sent}>I'm doing well, just working on a project.</span>
                                <span className={style.receive}>That sounds interesting. What's the project about?</span>
                                <span className={style.sent}>It's a web development project using React.</span>
                                <span className={style.receive}>Nice! React is a powerful library for building UIs.</span>
                                <span className={style.sent}>Absolutely! I'm enjoying working with it.</span>
                                <span className={style.receive}>Good to hear! Let me know if you need any help.</span>
                                <span className={style.sent}>Thanks! I might need some advice on state management.</span>
                                <span className={style.receive}>Sure, I can help with that. Are you using Redux or the Context API?</span>
                                <span className={style.sent}>I'm using the Context API for now.</span>
                                <span className={style.receive}>Great choice. It works well for simpler state management.</span>
                                <span className={style.sent}>Yeah, I wanted to keep things simple for this project.</span>
                                <span className={style.receive}>Makes sense. Let me know if you need any specific examples or tips.</span>
                                <span className={style.sent}>Will do, thanks!</span>
                                <span className={style.receive} ref={lastMessageRef}>You're welcome!</span>
                            </div>
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