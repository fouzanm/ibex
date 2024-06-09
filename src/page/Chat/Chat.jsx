import Navbar from '../../component/Navbar/Navbar';
import style from './Chat.module.css'
const Chat = () => {
    return (
        <>
            <Navbar activeSection={"Messages"}/>
            <div className={style.chat}>
                Chat
            </div>
        </>
    )
}

export default Chat;