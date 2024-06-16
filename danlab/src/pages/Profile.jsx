import React, {useState} from 'react';
import './Profile.css';
import logo_danlab from "../images/logo_danlab.png";
import ic_menu from "../images/ic_menu.png";
import line_2 from "../images/line_2.png";
import ProfileCard from "../components/ProfileCard";

const profileData = {
    name: '탁세하',
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

const Profile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const moveToMain = () => {
        window.location.href = '/main';
        console.log('move to main');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: '프로필', link: '/profile' },
        { name: '연구실 소개', link: '/main' },
        { name: '연구실 일상 공유', link: '/free-board' },
    ];

    return (
        <div className="container">
            <div className="title-container">
                <div className="title-top">
                    <img src={logo_danlab} alt="DanLab Logo" className="logo-danlab-small" onClick={moveToMain}/>
                    <div className="menu-container">
                        <img src={ic_menu} alt="menu" width="35" height="35" onClick={toggleMenu} className="icon-menu"/>
                        {isMenuOpen && (
                            <div className="dropdown-menu">
                                {menuItems.map((item, index) => (
                                    <a key={index} href={item.link} className="menu-item">{item.name}</a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <img src={line_2} alt="Line" className="line-2"/>
                <p className="board-title">마이 프로필</p>
            </div>
            <div className="profile-container">
                <ProfileCard name={profileData.name} department={profileData.department} year={profileData.year}
                             affiliation={profileData.affiliation} introduction={profileData.introduction}
                             lab={profileData.lab}/>
            </div>
        </div>

    );
};

export default Profile;
