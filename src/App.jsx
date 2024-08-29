import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/pagess/Profile";
import Chat from "./component/pagess/profile/Chat";
// import Maleprofiles from "./component/pagess/profile/Maleprofiles";
// import Femals from "./component/pagess/profile/Femals";
import Photo from "./component/pagess/Photo";
import Userprofile from "./component/pagess/profile/Userprofile";
import Dashboard from "./component/pagess/Dashboard";
import Admindata from "./component/pagess/Admindata";





function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/chat" element={<Chat/>} />
          {/* <Route exact path="/male" element={<Maleprofiles/>} /> */}
          {/* <Route exact path="/female" element={<Femals/>} /> */}
          <Route path="/photo" element={<Photo/>}></Route>
          <Route path="/myprofile" element={<Userprofile/>} ></Route>
          <Route path="/dashboard" element={<Dashboard/>} ></Route>
          <Route path="/admindata" element={<Admindata/>} ></Route>
          
          
         
        </Routes>
      </Router>

    </>
  );
}

export default App;
