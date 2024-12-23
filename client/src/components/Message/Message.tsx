import React from "react";
import { IMessage } from "../../types/message";
import "./Message.css";

export interface MessageProps {
  message: IMessage;
}

function Message({ message }: MessageProps) {
  return (
    <div className={`messageContainer ${message.user === "me" ? "self" : ""}`}>
      <span className="messageSender">{message.user}: </span>
      <span className={`messageItem`}>{message.message}</span>
    </div>
  );
}

export default Message;
