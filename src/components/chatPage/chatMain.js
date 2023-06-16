import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chatsidebar from "./chatSidebar";
import Chat from "./Chat";
import MobileMenu from "./mobileView/mobileView";
// import MobileMenu from "./mobileView/mobileView";

const ChatMain = () => {
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
