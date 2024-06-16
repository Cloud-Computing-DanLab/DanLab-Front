import React, {useState} from 'react';
import './LabInfo.css';
import logo_danlab from "../images/logo_danlab.png";
import ic_menu from "../images/ic_menu.png";
import line_2 from "../images/line_2.png";
import LabProfile from "../components/LabProfile";

const labData = {
    name: 'BoanLab',
    department: 'SW융합대학 컴퓨터공학과',
    professor: '남재현',
    link: `https://www.boanlab.com`,
    researchField: `Cloud Workload Observability and Security
    Cloud Infrastructure and Security
    5G Security
    AI-powered Security`
};

const LabInfo = () => {
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
                        <img src={ic_menu} alt="menu" width="35" height="35" onClick={toggleMenu}
                             className="icon-menu"/>
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
                <p className="board-title">연구실 정보</p>
            </div>
            <div className="lab-info-container">
                <LabProfile name={labData.name} department={labData.department} professor={labData.professor}
                            link={labData.link} researchField={labData.researchField}/>
            </div>
        </div>

    );
};

export default LabInfo;
