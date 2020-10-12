import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DrawerLeft from "./components/drawer";
import LoginForm from "./components/login-form";
import ProfileDrawer from "./components/profile-drawer";

function App() {
  return (
    <div className="App">
      <DrawerLeft />
      {/* <ProfileDrawer /> */}
      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
