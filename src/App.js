//brings together all components
//provides routing
//styling of components

import React from "react";
import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./Components/Header";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./Components/Login";
import Spinner from "react-spinkit";
function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://th.bing.com/th/id/R.7c36a2be0d9c1d40ecdbbe01a60c1d58?rik=1n%2f28bKQLUrMYw&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery%2fn1247116.jpg&ehk=n5Vqz9hclLql24y6hOhOSvgTo2z8GQle4FdJuOpNknE%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none"/>
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      <BrowserRouter>
      {!user ? (
        <Login /> //if user not present  redirects to login component
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              {/* <Route path="/login" element={!user?<Login/>:}/> */}
              <Route path="/" element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      )}
      </BrowserRouter>
    </div>
  );
}

export default App;
const AppBody = styled.div`
  height: 100vh;
  display: flex;
`;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
