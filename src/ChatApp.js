import React from "react";
import AppRouter from "./routes/AppRouter";
import AuthState from "./auth/AuthState";
import SocketState from "./context/SocketState";
import ChatState from "./context/chat/ChatState";
const ChatApp = () => {
  return (
    <div>
      <AuthState>
        <ChatState>
          <SocketState>
            <AppRouter />
          </SocketState>
        </ChatState>
      </AuthState>
    </div>
  );
};

export default ChatApp;
