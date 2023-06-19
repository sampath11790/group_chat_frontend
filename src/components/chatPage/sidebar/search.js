import React, { useState } from "react";
import cls from "./sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AddMember } from "../../Store/group/group-thunk";
const Search = () => {
  const [email, setemail] = useState("");
  const { token } = useSelector((state) => state.auth);
  const { currentGroupid } = useSelector((state) => state.group);
  const Dispatch = useDispatch();
  const fromHandler = (e) => {
    e.preventDefault();
    // console.log(email);
    Dispatch(AddMember({ email: email, groupid: currentGroupid }, token));
  };
  return (
    <form className={cls.Search_bar_containter} onSubmit={fromHandler}>
      <input
        type="text"
        placeholder="enter user mailid"
        onChange={(e) => setemail(e.target.value)}
      ></input>
      <button type="submit">add</button>
    </form>
  );
};

export default Search;
