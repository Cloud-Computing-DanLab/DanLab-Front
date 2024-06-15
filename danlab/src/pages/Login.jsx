import React from 'react';
import './Login.css';
import logo_danlab from "../images/logo_danlab.png"
import logo_kakao from "../images/logo_kakao.png"
import logo_google from "../images/logo_google.png"

const Login = () => {
    const handleKakaoLogin = () => {
        // Add your Kakao login logic here
        console.log('Kakao login');
    };

    const handleGoogleLogin = () => {
        // Add your Google login logic here
        console.log('Google login');
    };

    return (
        <div className="container">
            <img src={logo_danlab} alt="DanLab Logo" width={290} height={55}/>
            <h1>단국대학교 연구실 커뮤니티</h1>
            <button className="kakao-button" onClick={handleKakaoLogin}>
                <img src={logo_kakao} alt="Kakao Logo" className="btnLogo"/>
                카카오톡으로 로그인
            </button>
            <button className="google-button" onClick={handleGoogleLogin}>
                <img src={logo_google} alt="Kakao Logo" className="btnLogo"/>
                Google로 로그인
            </button>
        </div>
    );
};

export default Login;
