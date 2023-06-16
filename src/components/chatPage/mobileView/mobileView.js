import React from "react";
// import cls from "./sidebar.module.css";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import Group from "./group";
// import UserList from "./userlist";
import { Grid } from "@mui/material";
import Chat from "../Chat";
import Chatsidebar from "../chatSidebar";

export default function MobileMenu() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Profile" value="1" />
            <Tab label="Chat" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Chatsidebar></Chatsidebar>
        </TabPanel>
        <TabPanel value="2" sx={{ width: "100vw" }}>
          <Chat></Chat>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

{
  /* <Grid container sx={{ height: "100%" }}>
  
</Grid> */
}
