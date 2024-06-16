import React from 'react';
import './LabBoard.css';
import logo_danlab from "../images/logo_danlab.png"
import line_2 from "../images/line_2.png"
import ic_menu from "../images/ic_menu.png"
import LabInfoTable from "../components/LabInfoTable";

const researchLabs = [
    {
        name: '통신 및 지능 연구실',
        researchField: '차세대 통신 시스템',
        professor: '이규행',
        department: 'SW융합대학 모바일시스템공학과',
        contact: '031-8005-3241',
    },
    {
        name: '컴퓨터보안 및 운영체제 연구실',
        researchField: '안드로이드 포렌식, IVI/OBD 관련 디지털 포렌식',
        professor: '조성제',
        department: 'SW융합대학 소프트웨어학과',
        contact: '031-8005-3239',
    },
    {
        name: '시스템 소프트웨어 연구실',
        researchField: 'Storage Next-generation Storage, FTL, Digital Storage Forensic, Distributed Storage',
        professor: '최종무',
        department: 'SW융합대학 소프트웨어학과',
        contact: '031-8005-3242',
    },
    {
        name: '알고리즘 연구실',
        researchField: '계산이론(Theory of Computation)',
        professor: '김준모',
        department: 'SW융합대학 컴퓨터공학과',
        contact: '031-8005-3666',
    },
    {
        name: '모바일운영체제 연구실',
        researchField: '시스템 소프트웨어 및 운영체제',
        professor: '유시환',
        department: 'SW융합대학 모바일시스템공학과',
        contact: '031-8005-3670',
    },
    {
        name: '정보보안 연구실',
        researchField: '암호 알고리즘',
        professor: '윤택영',
        department: 'SW융합대학 사이버보안학과',
        contact: '031-8005-3253',
    },
    {
        name: '지능정보시스템 연구실',
        researchField: 'Wearable device',
        professor: '최응근',
        department: 'SW융합대학 컴퓨터공학과',
        contact: '031-8005-2809',
    },
];

function ResearchLabs() {
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
                <p className="board-title">연구실 소개</p>
            </div>
            <div className="category">
                <p className="clicked-category">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;연구실 정보</p>
                <p className="divider">|</p>
                <p className="unclicked-category">프로젝트/이벤트 정보</p>
            </div>
            <LabInfoTable table={researchLabs}/>
        </div>
    );
}

export default ResearchLabs;
