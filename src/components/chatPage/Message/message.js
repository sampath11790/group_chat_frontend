import React from "react";
import cls from "./message.module.css";
const Message = ({ id, message, createdAt, user }) => {
  const time = (obj) => {
    const currentDate = new Date(obj);
    const dateString = currentDate.toDateString();
    const timeString = currentDate.toLocaleTimeString();

    // const dateTimeString = dateString + " " + timeString;

    return timeString;
  };
  return (
    <li key={id} className={id % 2 == 0 ? cls.chatMessage : cls.rightChat}>
      <span className={cls.time}>{time(createdAt)}</span>
      <span className={cls.time}>{user}</span>
      <span className={cls.message}>
        <span className={cls.messageContent}>{message}</span>
      </span>
    </li>
  );
};

export default Message;
