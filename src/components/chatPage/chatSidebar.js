import React from "react";
import cls from "./chatSidebar.module.css";
import SidebarNav from "./sidebar/nav";
import Search from "./sidebar/search";
import ToggleMenu from "./sidebar/toggleMenu";
// import Groups from "./sidebar/toggleMenu";

const Chatsidebar = () => {
  return (
    <div className={cls.sidebar_main_container}>
      <SidebarNav></SidebarNav>
      <Search></Search>
      <ToggleMenu></ToggleMenu>
    </div>
  );
};

export default Chatsidebar;
