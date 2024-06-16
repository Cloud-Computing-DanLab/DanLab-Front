import React, { useState } from 'react';
import './Register.css';
import logo_danlab from "../images/logo_danlab.png"
import line_2 from "../images/line_2.png"

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        studentId: '',
        major: '',
        isStudent: true,
        labName: '',
        selfIntroduction: '',
    });

    const moveToMain = () => {
        window.location.href = '/main';
        console.log('move to main');
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
                        <input className="register-input" type="text" name="name" value={formData.name}
                               onChange={handleChange}/>
                    </label>
                    <label>
                        2. 학번을 입력해주세요
                        <input className="register-input" type="text" name="studentId" value={formData.studentId}
                               onChange={handleChange}/>
                    </label>
                    <label>
                        3. 학과를 입력해주세요
                        <input className="register-input" type="text" name="major" value={formData.major}
                               onChange={handleChange}/>
                    </label>
                    <label>
                        4. 학부생/연구생 여부를 체크해주세요
                        <div className="div-check">
                            <label className="check-label">
                                <input type="checkbox" name="isStudent" checked={formData.isStudent}
                                       onChange={handleChange}/>
                                학부생
                            </label>
                            <label className="check-label">
                                <input type="checkbox" name="isResearcher" checked={!formData.isStudent}
                                       onChange={() => setFormData({...formData, isStudent: !formData.isStudent})}/>
                                연구생
                            </label>
                        </div>
                    </label>
                    <label>
                        4-1. 소속 연구실 이름을 입력해주세요
                        <input className="register-input" type="text" name="labName" value={formData.labName}
                               onChange={handleChange} disabled={formData.isStudent}/>
                    </label>
                    <label>
                        5. 간단한 자기소개를 적어주세요
                        <textarea className="register-intro" name="selfIntroduction" value={formData.selfIntroduction}
                               onChange={handleChange} placeholder=" ex) 연구 분야, 관심 공부 분야, 연구실 내 역할 등"></textarea>
                    </label>
                    <div className="div-register-button">
                        <button className="register-button" type="submit" onClick={moveToMain}>회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
