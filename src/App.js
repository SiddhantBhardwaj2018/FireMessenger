import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import db from './firebase'
import Message from './Message'
import firebase from 'firebase';
import "./App.css";
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username,setUserName] = useState('');
  console.log(messages)
  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    })
  },[])
  console.log(messages)

  useEffect(() => {
    setUserName(prompt("Please Enter Your Name"))
  },[])

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  };
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>FireMessenger 🔥🔥</h1>
      <h2>Welcome {username} 🔥</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <InputLabel> Enter Message ....</InputLabel>
          <Input className="app_input" value={input} onChange={(e) => setInput(e.target.value)} />

          <IconButton className="app_iconButton"  disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}>
              <SendIcon />
            </IconButton>

           
        </FormControl>
      </form>
      <FlipMove>

      {messages.map(({id, data}) => (
          <Message key = {id} username = {username} message={data}/>

      ))}
      </FlipMove>
    </div>
  );
}

export default App;
