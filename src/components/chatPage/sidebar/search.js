import React from "react";
import cls from "./sidebar.module.css";
const Search = () => {
  return (
    <div className={cls.Search_bar_containter}>
      <input type="text" placeholder="enter user mailid"></input>
      <button>search</button>
    </div>
  );
};

export default Search;
