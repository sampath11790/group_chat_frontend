import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chatsidebar from "./chatSidebar";
import Chat from "./Chat";
import MobileMenu from "./mobileView/mobileView";
import { useDispatch, useSelector } from "react-redux";
import { GetAllMembers, GetGroupMembers } from "../Store/group/group-thunk";
import { getCurrentGroupMessages } from "../Store/message/message-thunk";
// import MobileMenu from "./mobileView/mobileView";

const ChatMain = () => {
  const Dispatch = useDispatch();
  const { login, token } = useSelector((state) => state.auth);
  const { currentGroupid } = useSelector((state) => state.group);
  useEffect(() => {
    if (token != null && currentGroupid != null) {
      Dispatch(getCurrentGroupMessages({ groupid: currentGroupid }, token));
      // Dispatch(GetGroupMembers(token, currentGroupid));
    }
  }, [token, currentGroupid]);
  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        display={{ xs: "flex", sm: "none", md: "none" }}
      >
        <MobileMenu></MobileMenu>
      </Box>
      <Box
        sx={{ flexGrow: 1 }}
        display={{ xs: "none", sm: "flex", md: "flex" }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid md={4} sm xs={0}>
            <Chatsidebar></Chatsidebar>
          </Grid>
          <Grid item md={8} sm={8} xs={12}>
            <Chat></Chat>
            {/* </Item> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ChatMain;
