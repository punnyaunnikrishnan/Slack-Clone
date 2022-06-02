//chatinput container styling and it's modifications
//fetching the roomid channel id user

import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const handleSubmit = (e) => {
    e.preventDefault(); //prevents refresh
    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });
    chatRef.current.scrollIntoView({
      behaviour: "smooth",
    });
    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          placeholder={`Message ${channelName}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button hidden type="submit" onClick={handleSubmit}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 10px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
