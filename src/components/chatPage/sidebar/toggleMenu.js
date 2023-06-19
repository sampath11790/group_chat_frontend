import React from "react";
import cls from "./sidebar.module.css";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Group from "./group";
import UserList from "./userlist";
import GroupUserList from "./groupuserlist";

export default function ToggleMenu() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="GROUP" value="1" />
            <Tab label="GROUP USER" value="2" />
            <Tab label="USER LIST" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Group></Group>
        </TabPanel>
        <TabPanel value="2">
          <GroupUserList></GroupUserList>
        </TabPanel>
        <TabPanel value="3">
          <UserList></UserList>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
