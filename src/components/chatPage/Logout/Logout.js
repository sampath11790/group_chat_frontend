import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthSliceAction } from "../../Store/Auth/Authslice";
import { Button } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";

const Logout = (props) => {
  const { login, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.clear();
    Dispatch(
      AuthSliceAction.setlogOut({ login: null, token: null, logout: true })
    );

    navigate("/login");
  };
  return (
    <>
      <Button variant="contained" onClick={logoutHandler}>
        Logout
        {/* <LogoutOutlined></LogoutOutlined> */}
      </Button>
    </>
  );
};

export default Logout;
