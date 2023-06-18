import React from "react";
import cls from "./sidebar.module.css";
import { useSelector } from "react-redux";
const Group = () => {
  const { token } = useSelector((state) => state.auth);
  const { groupList } = useSelector((state) => state.group);
  return (
    <div>
      {groupList.map((item) => (
        <p key={item.id}>{item.groupname}</p>
      ))}
    </div>
  );
};

export default Group;
