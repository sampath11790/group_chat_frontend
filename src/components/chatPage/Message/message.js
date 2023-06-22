import React from "react";
import cls from "./message.module.css";
import { useSelector } from "react-redux";

import { AccountCircle, PersonPinCircleOutlined } from "@mui/icons-material";
const Message = ({ id, message, createdAt, user }) => {
  // const { email } = useSelector((state) => state.auth);
  const name = localStorage.getItem("name");
  let isURL = message.startsWith("https://") && message.endsWith(".jpg");

  const time = (obj) => {
    const currentDate = new Date(obj);
    const dateString = currentDate.toDateString();
    const timeString = currentDate.toLocaleTimeString();

    // const dateTimeString = dateString + " " + timeString;
    // return dateTimeString;
    return timeString;
  };
  return (
    <li key={id} className={name != user ? cls.chatMessage : cls.rightChat}>
      <div>
        <span style={{ display: "flex" }}>
          {" "}
          {/* <AccountCircle></AccountCircle> */}
          <PersonPinCircleOutlined></PersonPinCircleOutlined>
          <span>{user}</span>
          <span className={cls.time}>{time(createdAt)}</span>
        </span>
      </div>
      <span className={name == user ? cls.message : cls.messageright}>
        <span
          className={
            name == user ? cls.messageContent : cls.messageContentright
          }
        >
          {isURL ? <img src={message} width={100} height={100}></img> : message}
          {isURL && (
            <a href={message} target="_blank" rel="noopener noreferrer">
              Click to download
            </a>
          )}
        </span>
      </span>
    </li>
  );
};

export default Message;
