import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import LabInfo from "./pages/LabInfo";
import LabBoard from "./pages/LabBoard";
import FreeBoard from "./pages/FreeBoard";
import Post from "./pages/Post";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="main" element={<LabBoard/>}/>
            <Route path="free-board" element={<FreeBoard/>}/>
            <Route path="lab-info" element={<LabInfo/>}/>
            <Route path="project-info" element={<LabInfo/>}/>
            <Route path="free-info" element={<LabInfo/>}/>
            <Route path="post" element={<Post/>}/>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

