//added login
//styling of login components and google authentication
//
import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://th.bing.com/th/id/R.7c36a2be0d9c1d40ecdbbe01a60c1d58?rik=1n%2f28bKQLUrMYw&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery%2fn1247116.jpg&ehk=n5Vqz9hclLql24y6hOhOSvgTo2z8GQle4FdJuOpNknE%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <h1>Sign In to ChatBuddy</h1>
        <p>chatbuddy.slack.com</p>
        <Button onClick={signIn}>Sign in With Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 90px;
  text-align: center;
  background-color: white;
  border-radius: 60px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: container;
    height: 90px;
    margin-bottom: 10px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
