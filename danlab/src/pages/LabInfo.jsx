import React from 'react';
import './LabInfo.css';
import logo_danlab from "../images/logo_danlab.png";
import ic_menu from "../images/ic_menu.png";
import line_2 from "../images/line_2.png";
import LabProfile from "../components/LabProfile";

const LabInfo = () => {
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

    const moveToMain = () => {
        window.location.href = '/main';
        console.log('move to main');
    };

    return (
        <div className="container">
            <div className="title-container">
                <div className="title-top">
                    <img src={logo_danlab} alt="DanLab Logo" className="logo-danlab-small" onClick={moveToMain}/>
                    <img src={ic_menu} alt="menu" width="35" height="35"/>
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
