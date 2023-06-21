import React from "react";
import cls from "./chatSidebar.module.css";
import SidebarNav from "./sidebar/nav";
import Search from "./sidebar/search";
import ToggleMenu from "./sidebar/toggleMenu";
import { useSelector } from "react-redux";
// import Groups from "./sidebar/toggleMenu";

const Chatsidebar = () => {
  const { isAdmin, currentGroupid } = useSelector((state) => state.group);
  return (
    <div className={cls.sidebar_main_container}>
      <SidebarNav></SidebarNav>
      {isAdmin && currentGroupid && <Search></Search>}
      <ToggleMenu></ToggleMenu>
    </div>
  );
};

export default Chatsidebar;
