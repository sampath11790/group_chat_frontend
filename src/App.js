import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateGroup from "./components/chatPage/CreateGroup/CreateGroup";
import ChatMain from "./components/chatPage/chatMain";
import SignupPage from "./components/login/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AuthSliceAction } from "./components/Store/Auth/Authslice";

function App() {
  const Dispatch = useDispatch();

  const { login, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const login = localStorage.getItem("login");
    Dispatch(AuthSliceAction.setAuth({ login: login, token: token }));
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
      {/* <SignupPage></SignupPage> */}
      {/* <ChatMain></ChatMain> */}
      {/* <CreateGroup></CreateGroup> */}
      <Routes>
        <Route path="signup" element={<SignupPage />} />
        <Route path="chatmain" element={<ChatMain />} />
        <Route path="creategroup" element={<CreateGroup />} />
      </Routes>
    </div>
  );
}

export default App;
