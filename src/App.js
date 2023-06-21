import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateGroup from "./components/chatPage/CreateGroup/CreateGroup";
import ChatMain from "./components/chatPage/chatMain";
import SignupPage from "./components/login/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AuthSliceAction } from "./components/Store/Auth/Authslice";
// import io from "socket.io-client";

import {
  GetGroupMembers,
  GetgroupList,
} from "./components/Store/group/group-thunk";
import socket from "./socket";
import { getCurrentGroupMessages } from "./components/Store/message/message-thunk";
import { groupSliceAction } from "./components/Store/group/groupslice";
import { MessageSliceAction } from "./components/Store/message/messageslice";
// const activeConnections = io.sockets;

// const socket = io.connect("http://localhost:8001");

function App() {
  const Dispatch = useDispatch();

  const { login, token, logout, email } = useSelector((state) => state.auth);
  const { call, currentGroupid } = useSelector((state) => state.group);
  // console.log(currentGroupid, token);
  const navigate = useNavigate();

  // console.log("currentGroupid, token", currentGroupid, token);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const login = localStorage.getItem("login");
    const email = localStorage.getItem("email");
    // console.log(token, login);
    if (login == "true") {
      Dispatch(
        AuthSliceAction.setAuth({ login: login, token: token, email: email })
      );
    }
  }, []);
  useEffect(() => {
    if (login == "true") {
      navigate("/chatmain");
      return;
    } else {
      navigate("/login");
    }
  }, [login]);
  useEffect(() => {
    if (token != null) {
      Dispatch(GetgroupList(token));
    }
  }, [call, token]);
  useEffect(() => {
    // socket.on("receive-message", (room) => {
    //   if (room.groupid == currentGroupid && token != null) {
    //     Dispatch(getCurrentGroupMessages({ groupid: room.groupid }, token));
    //   }
    // });
    socket.on("receive-message", (room) => {
      console.log("Received message:", room, token);
      if (room == currentGroupid) {
        Dispatch(getCurrentGroupMessages({ groupid: room }, token));
        return;
      }
      // return;
    });
    socket.on("received-added-group", (user) => {
      console.log("received-added-group:", user);
      if (user.email == email) {
        Dispatch(GetgroupList(token));
        return;
      }
      if (user.adminemail == email) {
        Dispatch(GetGroupMembers(token, user.groupid));
      }
    });
    socket.on("received-removed-group", (user) => {
      console.log("received-removed-group:", user.email);
      if (user.email == email) {
        Dispatch(GetgroupList(token));
        Dispatch(groupSliceAction.setGroupInitalstate());
        return;
      }
      console.log((user.adminemail, email));
      if (user.adminemail == email) {
        Dispatch(GetGroupMembers(token, user.groupid));
      }
    });
    socket.on("received-deleted-group", (group) => {
      console.log("received-removed-group:", group.groupid);
      if (group.groupid == currentGroupid) {
        Dispatch(GetgroupList(token));
        Dispatch(groupSliceAction.setGroupInitalstate());
        Dispatch(MessageSliceAction.setMessageInitalstate());
        Dispatch(groupSliceAction.setGroupMember([]));
        return;
      }
      // console.log((user.adminemail, email));
      // if (user.adminemail == email) {
      //   Dispatch(GetGroupMembers(token, user.groupid));
      // }
    });
    //("received-deleted-group", group)
  }, [socket, currentGroupid, token]);
  return (
    <div>
      <Routes>
        <Route path="login" element={<SignupPage />} />
        <Route path="chatmain" element={<ChatMain />} />
        <Route path="creategroup" element={<CreateGroup />} />
      </Routes>
    </div>
  );
}

export default App;
