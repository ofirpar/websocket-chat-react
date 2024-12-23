import React, { useEffect, useRef } from "react";
import { IMessage } from "../../types/message";
import Message from "../Message/Message";
import "./ChatWindow.css";

function ChatWindow({ messages }: { messages: IMessage[] }) {
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      const height = chatWindowRef.current.scrollHeight;
      chatWindowRef.current.scrollTo({ top: height, behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="chat-window" ref={chatWindowRef}>
      {messages.map((msg: IMessage, index: number) => (
        <Message key={`message-${index}`} message={msg} />
      ))}
    </div>
  );
}

export default ChatWindow;
