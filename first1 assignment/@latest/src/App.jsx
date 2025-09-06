import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/navbar";
import Fetchdata from "./component/fetchdata";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import No404 from "./pages/404";

function App() {
  return (
    <div className="bg">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Fetchdata/>}/>
        <Route  path="signup" element={<Signup/>}/>
        <Route  path="login" element={<Login/>}/>
        <Route  path="*" element={<No404/>}/>
      </Routes>
    </div>
  );
}

export default App;
