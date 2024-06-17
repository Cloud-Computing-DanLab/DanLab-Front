import React from 'react';
import './Login.css';
import logo_danlab from "../images/logo_danlab.png"
import logo_kakao from "../images/logo_kakao.png"
import logo_google from "../images/logo_google.png"
import {loginPage} from "../Fetch";

const Login = () => {
    const handleKakaoLogin = async () => {
        try {
            const response = await loginPage();
            const data = response.data.res_obj;

            console.log(data);

            if (data[0].platform_type === "KAKAO") {
                window.location.href = data[0].url;
            } else if (data[1].platform_type === "KAKAO") {
                window.location.href = data[1].url;
            }

        } catch (error) {
            // alert("올바르지 못한 코드 값 입니다.")
            // window.location.href = '/';
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const response = await loginPage();
            const data = response.data.res_obj;

            console.log(data);

            if (data[0].platform_type === "GOOGLE") {
                window.location.href = data[0].url;
            } else if (data[1].platform_type === "GOOGLE") {
                window.location.href = data[1].url;
            }
        } catch (error) {
            // alert("올바르지 못한 코드 값 입니다.")
            // window.location.href = '/';
        }
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
