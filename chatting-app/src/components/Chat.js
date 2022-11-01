import React , {useState , useEffect} from "react";
import {db , auth} from "../firebase"
import SignOut from "./SignOut";
import SendMessage from './SendMessage'
export default function Chat () {
    const [messages , setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    },[])
    return (
        <div>
            <h2>Welcome back {auth.currentUser.displayName}</h2>
            
            <SignOut/>
          
            <div className="msgs">
                {messages.map(({id , text , uid , photoURL}) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt = ""/>
                            <p>{text}</p>
                             </div>
                        </div>
                ))}
                </div>
            <SendMessage/>
            <div></div>
        </div>
    )
}