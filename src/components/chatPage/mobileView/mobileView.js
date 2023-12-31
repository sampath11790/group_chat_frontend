import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Chat from "../Chat";
import Chatsidebar from "../chatSidebar";
import CreateGroup from "../CreateGroup/CreateGroup";
import { useSelector } from "react-redux";

export default function MobileMenu() {
  const [value, setValue] = React.useState("1");

  const { toggleMenu } = useSelector((state) => state.message);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setValue("2");
  }, [toggleMenu]);

  const styleobj = {
    height: "100%",
    width: "100%",
    padding: 0,
    margin: 0,
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Profile" value="1" />
            <Tab label="Chat" value="2" />
            <Tab label="Create Group" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={styleobj}>
          <Chatsidebar></Chatsidebar>
        </TabPanel>
        <TabPanel value="2" sx={styleobj}>
          <Chat></Chat>
        </TabPanel>
        <TabPanel value="3" sx={styleobj}>
          <CreateGroup></CreateGroup>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
