import React from 'react';
import './Profile.css';
import logo_danlab from "../images/logo_danlab.png";
import ic_menu from "../images/ic_menu.png";
import line_2 from "../images/line_2.png";
import ic_student from "../images/ic_student.png";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
    const profileData = {
        name: '탁세하',
        img: ic_student,
        department: '소프트웨어학과',
        year: '4학년',
        affiliation: '학부생',
        lab: '',
        introduction: `안녕하세요~~~ 열심히 공부하고 싶습니다~~~~~~~~
    안녕하세요~~~ 열심히 공부하고 싶습니다~~~~~~~~
    안녕하세요~~~ 열심히 공부하고 싶습니다~~~~~~~~
    안녕하세요~~~ 열심히 공부하고 싶습니다~~~~~~~~
    안녕하세요~~~ 열심히 공부하고 싶습니다~~~~~~~~
    안녕하세요~~~ 열심히 공부하고 싶습니다~~~~~~~~
    안녕하세요~~~ 열심히 공부하고 싶습니다~~~~~~~~
    안녕하세요~~~ 열심히 공부하고 싶습니다~~~~~~~~`
    };

    return (
        <div className="container">
            <div className="title-container">
                <div className="title-top">
                    <img src={logo_danlab} alt="DanLab Logo" className="logo-danlab-small"/>
                    <img src={ic_menu} alt="menu" width="35" height="35"/>
                </div>
                <img src={line_2} alt="Line" className="line-2"/>
                <p className="board-title">프로필</p>
            </div>
            <div className="profile-container">
                <ProfileCard name={profileData.name} department={profileData.department} year={profileData.year}
                             affiliation={profileData.affiliation} introduction={profileData.introduction}
                             img={profileData.img} lab={profileData.lab}/>
            </div>
        </div>

    );
};

export default Profile;
