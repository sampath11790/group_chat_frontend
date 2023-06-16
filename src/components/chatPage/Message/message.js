import React from "react";
import cls from "./message.module.css";
const Message = (props) => {
  const time = () => {
    const currentDate = new Date();
    const dateString = currentDate.toDateString();
    const timeString = currentDate.toLocaleTimeString();

    // const dateTimeString = dateString + " " + timeString;

    return timeString;
  };
  return (
    <li
      key={props.text}
      className={props.text % 2 == 0 ? cls.chatMessage : cls.rightChat}
    >
      <span className={cls.time}>{time()}</span>
      <span className={cls.message}>
        <span className={cls.messageContent}>message {props.text}</span>
      </span>
    </li>
  );
};

export default Message;
