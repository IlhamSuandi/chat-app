"use client";
import React, { MutableRefObject } from "react";
import io from "socket.io-client";

export const SocketProvider = React.createContext<any>(null);

export const socket = io("ws://192.168.1.2:5000", {
  transports: ["websocket"],
});

export function ChatProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    socket.emit("chat", 1, "ilham suandi");
    socket.on("user-join", (data) => console.log(data));
  }, []);

  const sendMessage = (roomId: string, username: string, messages: string) => {
    socket.emit("chat-message", roomId, username, messages);
  };

  return (
    <SocketProvider.Provider
      value={{
        sendMessage,
      }}
    >
      {children}
    </SocketProvider.Provider>
  );
}
