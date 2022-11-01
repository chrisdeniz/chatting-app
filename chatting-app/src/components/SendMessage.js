import Button  from '@mui/material/Button';
import Input from '@mui/material/Input'
import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase/compat/app';

export default function SendMessage() {
const [msg , setMsg] = useState('')
async function sendMessage(e) {
    e.preventDefault()
    const {uid , photoURL} = auth.currentUser   
    await db.collection('messages').add({
        text : msg,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()

    })
    setMsg('')
}
    return(
        <div>
            <form onSubmit={sendMessage}>
                <div className='sendMsg'>
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} type="text" placeholder="Message..." onChange={e => setMsg(e.target.value)}>
                    </Input>
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">
                        Send 
                    </Button>
                </div>
            </form>
        </div>
    )
}