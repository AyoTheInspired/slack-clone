import React, { useState } from 'react'
import db from './firebase'
import './ChatInput.css'
import { useStateValue } from './StateProvider'
import firebase from 'firebase'

function ChatInput({channelName, channelId }) {

const [input, setInput] = useState("")
const [{ user }] = useStateValue()

const sendMessage = (e) => {
 e.preventDefault();
 
 console.log(e)

 if(e.target.value) {
  console.log('input has a value')
 }else {
  console.log('input has no value')
 }



if (channelId) {
 db.collection('rooms').doc(channelId).collection('messages').add({
  message: input,
  timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
  user: user.displayName,
  userImage: user.photoURL,
 })
}
}


 return (
  
  <div className="chatInput">
  <form>
  <input
  type="text"
  value={input}
  onInput={(e) => setInput(e.target.value)}
  placeholder={`Message Here...`} 
  />
   <button type="submit" onClick={sendMessage}>Send</button>
  </form>
  </div>

 )

}

export default ChatInput;
