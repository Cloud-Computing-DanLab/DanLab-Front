import React, {useState} from 'react';
import './LabBoard.css';
import logo_danlab from "../images/logo_danlab.png"
import line_2 from "../images/line_2.png"
import ic_menu from "../images/ic_menu.png"
import LabInfoTable from "../components/LabInfoTable";
import LabProjectTable from "../components/LabProjectTable";

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

const projects = [
    {
        project: '다수의 자세 추정 모델 경량화 프로젝트',
        labName: '알고리즘 연구실',
        department: 'SW융합대학 컴퓨터공학과',
    },
    {
        project: '신뢰부팅 및 플랫폼 무결성 검증 및 업데이트 지원 기술 · 플랫폼 무결성 확인 및 업데이트 관리 상태 확인을 위한 플랫폼 기술',
        labName: '모바일운영체제 연구실',
        department: 'SW융합대학 모바일시스템공학과',
    },
    {
        project: '클라우드 환경에서 암호화된 데이터를 활용을 지원하기 위한 기능 부가형 암호화 기술',
        labName: '정보보안 연구실',
        department: 'SW융합대학 사이버보안학과',
    },
    {
        project: 'Wearable Device & Human Computer Interaction',
        labName: '지능정보시스템 연구실',
        department: 'SW융합대학 컴퓨터공학과',
    }
];


function LabBoard() {
    const [currentTable, setCurrentTable] = useState('labs');
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

    const showLabInfo = () => {
        setCurrentTable('labs');
    };

    const showProjectInfo = () => {
        setCurrentTable('projects');
    };

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
                <p className="board-title">연구실 소개</p>
            </div>
            <div className="category">
                <p
                    className={currentTable === 'labs' ? "clicked-category" : "unclicked-category"}
                    onClick={showLabInfo}
                >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;연구실 정보
                </p>
                <p className="divider">|</p>
                <p
                    className={currentTable === 'projects' ? "clicked-category" : "unclicked-category"}
                    onClick={showProjectInfo}
                >
                    프로젝트/이벤트 정보
                </p>
            </div>
            {currentTable === 'labs' ? (
                <LabInfoTable table={researchLabs}/>
            ) : (
                <LabProjectTable table={projects}/>
            )}
        </div>
    );
}

export default LabBoard;
