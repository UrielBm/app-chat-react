import React, { useContext } from "react";
import ChatContext from "../context/chat/ChatContext";
import logo from "./../assets/img/logo.png";
import { Twirl as Hamburger } from "hamburger-react";
const Header = () => {
  const { menu, handleOpenMenu } = useContext(ChatContext);
  const handlesetOpen = () => {
    handleOpenMenu(!menu);
  };
  return (
    <header className="header">
      <div className="title">
        <h1>My Chat App</h1> <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="wrapperMenu">
        <Hamburger
          toggled={menu}
          toggle={handlesetOpen}
          color="#47597e"
          easing="ease-in"
          size={32}
        />
      </div>
    </header>
  );
};

export default Header;
