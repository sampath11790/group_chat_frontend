import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateGroup from "./components/chatPage/CreateGroup/CreateGroup";
import ChatMain from "./components/chatPage/chatMain";
import SignupPage from "./components/login/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AuthSliceAction } from "./components/Store/Auth/Authslice";
import io from "socket.io-client";
import {
  SendMesssage,
  getCurrentGroupMessages,
} from "./components/Store/message/message-thunk";
import {
  GetGroupMembers,
  GetgroupList,
} from "./components/Store/group/group-thunk";
// import { MessageSliceAction } from "./components/Store/message/messageslice";
import { groupSliceAction } from "./components/Store/group/groupslice";
const socket = io("http://localhost:8000");

function App() {
  const Dispatch = useDispatch();

  const {
    login,
    token,
    email: adminEmail,
  } = useSelector((state) => state.auth);
  const { GroupMember, currentGroupid } = useSelector((state) => state.group);
  const navigate = useNavigate();
  useEffect(() => {
    const email = localStorage.getItem("email");
    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socket.on("receive-message", (room) => {
      console.log("Received message:", room);
      if (room == currentGroupid) {
        Dispatch(getCurrentGroupMessages({ groupid: room }, token));
        return;
      }
    });
    socket.on("received-added-group", (user) => {
      console.log("received-added-group:", user);

      if (user.email == email) {
        Dispatch(GetgroupList(token));
        return;
      }
      // if (user.adminemail == email) {
      //   Dispatch(GetGroupMembers(token, user.groupid));
      // }
    });
    socket.on("received-removed-group", (user) => {
      console.log("received-removed-group:", user.email);
      if (user.email == email) {
        Dispatch(GetgroupList(token));
        Dispatch(groupSliceAction.setGroupInitalstate());
        return;
      }
      // if (user.adminemail == email) {
      //   Dispatch(GetGroupMembers(token, user.groupid));
      // }
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const login = localStorage.getItem("login");
    const email = localStorage.getItem("email");
    // console.log(token, login);
    Dispatch(
      AuthSliceAction.setAuth({ login: login, token: token, email: email })
    );
  }, []);
  useEffect(() => {
    if (login == "true") {
      navigate("/chatmain");
      return;
    } else {
      navigate("/login");
    }
  }, [login]);

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
