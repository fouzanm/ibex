import style from './Message.module.css'

const Message = ({image, name, message, time, count=0}) => {
    return (
        <div className={style.message}>
            <div className={style.image}>
                <img src={image}></img>
            </div>
            <div className={style.content}>
                <span className={style.name}>{name}</span>
                <span className={style.text}>{message}</span>
            </div>
            <div className={style.time}>
                <span className={style.last}>{time}</span>
                {count > 0 && <span className={style.unread}><p>{count}</p></span>}
            </div>
        </div>
    )
};

export default Message;