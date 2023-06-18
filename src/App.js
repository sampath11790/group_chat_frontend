import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateGroup from "./components/chatPage/CreateGroup/CreateGroup";
import ChatMain from "./components/chatPage/chatMain";
import SignupPage from "./components/login/Signup";

function App() {
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
