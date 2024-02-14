import styles from './chat-popup.module.css'
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {  useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {sendMsg} from '../../store/chat-slice'


export function ChatPopup({ setOpen }) {
    const bottomRef = useRef();

    const [msg, setMsg] = useState('');
    const user = useSelector(state => {
        return state.auth?.user
    })
    const dispatch=useDispatch()
    // ------------------------------------------------------------------------------------------------
    const handleSendMsg = (e) => {
        e.preventDefault();
        if(!msg)return
        dispatch(sendMsg(JSON.stringify({text:msg, isMyMessage:true})))
        setMsg('')
    }
    // ------------------------------------------------------------------------------------------------
  const msgs=useSelector(state=>state.chat.msgs)
    
    // ------------------------------------------------------------------------------------------------
    const scroolBottom = ( ) => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    // ------------------------------------------------------------------------------------------------
useEffect(() => {
    scroolBottom()
}, [msgs]);
    return (
        <div className={styles.chat_popup_wrapper} >
            <div className={styles.close_icon_wrapper}>
                <HighlightOffIcon style={{ color: '#0d6efd', cursor: 'pointer' }} onClick={() => { setOpen(false) }} />
            </div>
            <div className={styles.msgs_wrapper}>
                {msgs.map((msg, i) => {
                    return <div key={i} className={`${styles.popup_msg} ${msg.isMyMessage ? styles.myMessage : styles.otherMessage}`}>
                        <p>{msg.text}</p>
                    </div>
                })}
                            <span ref={bottomRef}></span>

            </div>
            <form  onSubmit={handleSendMsg} className={styles.chat_form_wrapper}>
                <input value={msg||''} onChange={(e)=>{setMsg(e.target.value)}} className={styles.chat_input} placeholder='send Message' />
                <SendTwoToneIcon onClick={handleSendMsg} style={{ color: '#0d6efd', cursor: 'pointer', marginInlineEnd: ' 10px ' }} />
            </form>
        </div>
    )
}
