import React, { useState } from "react";
import cls from "./sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AddMember } from "../../Store/group/group-thunk";
import { Button } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
const Search = () => {
  const [email, setemail] = useState("");
  const { token } = useSelector((state) => state.auth);
  const { currentGroupid } = useSelector((state) => state.group);
  const Dispatch = useDispatch();
  const fromHandler = (e) => {
    e.preventDefault();
    console.log(email);
    Dispatch(AddMember({ email: email, groupid: currentGroupid }, token));
    setemail("");
  };
  return (
    <form className={cls.Search_bar_containter} onSubmit={fromHandler}>
      <input
        type="text"
        placeholder="enter user mailid"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>
      <Button
        variant="contained"
        sx={{ bgcolor: "yellow", color: "black", borderRadious: 20 }}
        type="submit"
      >
        add
        <PersonAdd></PersonAdd>
      </Button>
    </form>
  );
};

export default Search;
