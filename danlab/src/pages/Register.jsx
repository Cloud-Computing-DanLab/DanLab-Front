import React, {useCallback, useEffect, useState} from 'react';
import './Register.css';
import logo_danlab from "../images/logo_danlab.png"
import line_2 from "../images/line_2.png"
import {authenticate, register} from "../Fetch";

const Register = () => {
    useEffect(() => {
        const location = window.location;
        const queryParams = new URLSearchParams(location.search);
        const code = queryParams.get('code');
        const state = queryParams.get('state');
        registerCheck(code, state);
    }, []);

    const registerCheck = async (code, state) => {
        try {
            const response = await authenticate(code, state);
            const data = response.data;

            console.log(data);

            if (data.platformId) {
                sessionStorage.setItem('platformId', data.platformId)
                sessionStorage.setItem('platformType', data.platformType)
            } else if (data.token) {
                sessionStorage.setItem('token', data.token)
                window.location.href = '/main';
            } else {
                throw DOMException;
            }
        } catch (error) {
            // alert("올바르지 못한 코드 값 입니다.")
            // window.location.href = '/';
        }
    }

    const registerInfo = async (body) => {
        try {
            const response = await register(body);

            console.log(response);

        } catch (error) {
            // alert("올바르지 못한 코드 값 입니다.")
            // window.location.href = '/';
        }
    }

    const [memberId, setMemberId] = useState(1);
    const [userInfo, setUserInfo] = useState({
        memberId: 1,
        labId: 0,
        name: '',
        studentId: '',
        major: '',
        isStudent: true,
        intro: '',
    });

    const moveToMain = () => {
        window.location.href = '/main';
        console.log('move to main');
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo);
        setUserInfo({
            ...userInfo,
            memberId: memberId
        });
        registerInfo(userInfo);
        setMemberId(memberId + 1);
        moveToMain();
    };

    return (
        <div className="container">
            <div className="title-container">
                <div className="title-top">
                    <img src={logo_danlab} alt="DanLab Logo" className="logo-danlab-small"/>
                </div>
                <img src={line_2} alt="Line" className="line-2"/>
                <p className="board-title">회원가입</p>
            </div>
            <div className="body-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        1. 이름을 입력해주세요
                        <input className="register-input" type="text" name="name" value={userInfo.name}
                               onChange={handleChange}/>
                    </label>
                    <label>
                        2. 학번을 입력해주세요
                        <input className="register-input" type="text" name="studentId" value={userInfo.studentId}
                               onChange={handleChange}/>
                    </label>
                    <label>
                        3. 학과를 입력해주세요
                        <input className="register-input" type="text" name="major" value={userInfo.major}
                               onChange={handleChange}/>
                    </label>
                    <label>
                        4. 학부생/연구생 여부를 체크해주세요
                        <div className="div-check">
                            <label className="check-label">
                                <input type="checkbox" name="isStudent" checked={userInfo.isStudent}
                                       onChange={handleChange}/>
                                학부생
                            </label>
                            <label className="check-label">
                                <input type="checkbox" name="isResearcher" checked={!userInfo.isStudent}
                                       onChange={() => setUserInfo({...userInfo, isStudent: !userInfo.isStudent})}/>
                                연구생
                            </label>
                        </div>
                    </label>
                    <label>
                        4-1. 소속 연구실 이름을 입력해주세요
                        <input className="register-input" type="text" name="labName" value={''}
                               onChange={handleChange} disabled={userInfo.isStudent}/>
                    </label>
                    <label>
                        5. 간단한 자기소개를 적어주세요
                        <textarea className="register-intro"
                                  onChange={handleChange} placeholder=" ex) 연구 분야, 관심 공부 분야, 연구실 내 역할 등"></textarea>
                    </label>
                    <div className="div-register-button">
                        <button className="register-button" type="submit" onClick={handleSubmit}>회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
