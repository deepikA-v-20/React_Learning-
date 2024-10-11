import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import UserImage from "./components/UserImage";
// import UserName from "./components/UserName";
// import UserDetails from "./components/UserDetails";
import UserImage from "./UserImage";
import UserName from "./UserName";
import UserDetails from "./UserDetails";
// import UserDetails from UserDetails;
function App1() {
  return (
    <Router>
      <div>
        <h1>Simple web page</h1>
        <nav>
          <Link to="/user-image">Home</Link> |{"                     "}
          <Link to="/user-name">About </Link> |{"                    "}
          <Link to="/user-details">Contact us</Link>
        </nav>

        <Routes>
          <Route path="/user-image" element={<UserImage />} />
          <Route path="/user-name" element={<UserName />} />
          <Route path="/user-details" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App1;
