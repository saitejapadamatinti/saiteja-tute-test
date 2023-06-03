import "./App.css";
import Navbar from "./Navbar";
import FriendRefferd from "./friendsRefferd";
import Home from "./home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="width-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friends-refferd" element={<FriendRefferd />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
