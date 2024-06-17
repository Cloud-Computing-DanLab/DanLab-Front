import React, {useEffect, useState} from 'react';
import './LabBoard.css';
import logo_danlab from "../images/logo_danlab.png"
import line_2 from "../images/line_2.png"
import ic_menu from "../images/ic_menu.png"
import LabInfoTable from "../components/LabInfoTable";
import LabProjectTable from "../components/LabProjectTable";
import {getLabEventList, getLabList} from "../Fetch";

const researchLabs = [
    {
        id: 1,
        name: '통신 및 지능 연구실',
        leader: '이규행',
        info: 'SW융합대학 모바일시스템공학과',
        contacts: '031-8005-3241',
    },
];

const projects = [
    {
        id: 0,
        labId: 0,
        title: 'DLAB 코딩 대회 개최!',
        detail: 'DLAB에서 SQL 코딩 테스트를 개최합니다!',

    },
];


function LabBoard() {
    const [currentTable, setCurrentTable] = useState('labs');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [labInfo, setLabInfo] = useState(researchLabs);
    const [projectInfo, setProjectInfo] = useState(projects);

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

    const setLabList = async () => {
        const response = await getLabList();
        const data = response.data.res_obj.content;

        setLabInfo(data)

        console.log(data);
    }

    const setLabEventList = async () => {
        const response = await getLabEventList();
        const data = response.data.res_obj.content;

        setProjectInfo(data)

        console.log(data);
    }

    useEffect(() => {
        setLabList();
        setLabEventList();
    }, []);

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
                <LabInfoTable table={labInfo}/>
            ) : (
                <LabProjectTable table={projectInfo}/>
            )}
        </div>
    );
}

export default LabBoard;
