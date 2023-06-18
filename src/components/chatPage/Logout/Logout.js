import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthSliceAction } from "../../Store/Auth/Authslice";
import { Button } from "@mui/material";

const Logout = (props) => {
  const { login, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.clear();
    Dispatch(AuthSliceAction.setAuth({ login: null, token: null }));

    navigate("/login");
  };
  return (
    <>
      <Button variant="contained" onClick={logoutHandler}>
        Logout
      </Button>
    </>
  );
};

export default Logout;
