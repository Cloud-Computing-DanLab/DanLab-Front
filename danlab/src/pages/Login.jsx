import React from 'react';
import './Login.css';
import logo_danlab from "../images/logo_danlab.png"
import logo_kakao from "../images/logo_kakao.png"
import logo_google from "../images/logo_google.png"
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleKakaoLogin = () => {
        navigate('register');
        console.log('Kakao login');
    };

    const handleGoogleLogin = () => {
        // Add your Google login logic here
        console.log('Google login');
    };

    return (
        <div className="login-container">
            <img src={logo_danlab} alt="DanLab Logo" className="danLabLogo"/>
            <p className="danLab">단국대학교 연구실 커뮤니티</p>
            <button className="kakao-button login-button" onClick={handleKakaoLogin}>
                <img src={logo_kakao} alt="Kakao Logo" className="btnLogo"/>
                카카오톡으로 로그인
            </button>
            <button className="google-button login-button" onClick={handleGoogleLogin}>
                <img src={logo_google} alt="Kakao Logo" className="btnLogo"/>
                Google로 로그인
            </button>
        </div>
    );
};

export default Login;
